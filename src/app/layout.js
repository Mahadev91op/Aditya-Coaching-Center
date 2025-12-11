// src/app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Import Footer
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "Aditya Coaching Center",
  description: "Best coaching for full stack development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        <AuthProvider>
          <Navbar />
          {/* Main content ke baad Footer har page par dikhega */}
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}