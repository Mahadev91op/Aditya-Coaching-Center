"use client";
import { useState } from "react";
import { signIn } from "next-auth/react"; // NextAuth Import kiya
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, ArrowRight, Github, Chrome, AlertCircle, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // NextAuth ka signIn function call kiya
      const res = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false, // Page reload nahi hone denge
      });

      if (res.error) {
        setError("Invalid email or password");
        setIsLoading(false);
      } else {
        // Success: Home page par bhejo
        router.push("/");
        router.refresh(); // Navbar update karne ke liye
      }
    } catch (err) {
      setError("Something went wrong");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center relative overflow-hidden px-4">
      
      {/* Background Blobs (Same as before) */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000"></div>

      {/* Glass Card */}
      <div className="relative w-full max-w-md bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl p-8 z-10">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Welcome Back</h2>
          <p className="text-gray-500 text-sm mt-2 font-medium">Please enter your details to sign in.</p>
        </div>

        {/* Global Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-700 text-sm rounded-lg flex items-center gap-2">
            <AlertCircle size={16} /> {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div className="group">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Email Address</label>
            <div className="relative mt-1.5">
              <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="student@example.com"
                className="w-full pl-10 pr-4 py-3 bg-white/60 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 font-medium text-gray-900"
              />
            </div>
          </div>

          <div className="group">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Password</label>
            <div className="relative mt-1.5">
              <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <input name="password" type="password" value={formData.password} onChange={handleChange} required placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 bg-white/60 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 font-medium text-gray-900"
              />
            </div>
          </div>

          <button disabled={isLoading} className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70">
            {isLoading ? <><Loader2 size={20} className="animate-spin" /> Signing In...</> : <>Sign In <ArrowRight size={18} /></>}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600 font-medium">
          Not a member yet? <Link href="/signup" className="font-bold text-blue-600 hover:underline">Register Now</Link>
        </p>
      </div>
    </div>
  );
}