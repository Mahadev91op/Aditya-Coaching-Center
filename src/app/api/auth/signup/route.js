import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect"; // Database connection
import User from "@/models/User"; // User Model
import bcrypt from "bcryptjs"; // Password security

export async function POST(req) {
  try {
    // 1. Database se connect karo
    await dbConnect();

    // 2. Frontend se data nikalo
    const { name, email, password } = await req.json();

    // 3. Check karo ki user pehle se to nahi hai
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists with this email." },
        { status: 400 }
      );
    }

    // 4. Password ko Hash (Encrypt) karo
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. Naya User create karo
    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // 6. Success message bhejo
    return NextResponse.json(
      { message: "User registered successfully!" },
      { status: 201 }
    );

  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}