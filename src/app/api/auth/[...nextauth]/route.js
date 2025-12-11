import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        // 1. Database Connect karo
        await dbConnect();

        // 2. User dhundo email se
        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("No user found with this email");
        }

        // 3. Password match karo
        const isValid = await bcrypt.compare(credentials.password, user.password);

        if (!isValid) {
          throw new Error("Incorrect password");
        }

        // 4. Agar sab sahi hai, to user object return karo
        return {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role, // Admin/Student role
        };
      },
    }),
  ],
  pages: {
    signIn: "/login", // Default login page ko override karke apna page use karenge
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // Session me role aur id add karne ke liye
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };