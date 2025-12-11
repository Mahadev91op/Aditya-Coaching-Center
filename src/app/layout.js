import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider"; // Import kiya

export const metadata = {
  title: "Aditya Coaching Center",
  description: "Best coaching for full stack development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        {/* AuthProvider se wrap kiya */}
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}