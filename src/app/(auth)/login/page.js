"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
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
      const res = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid email or password");
        setIsLoading(false);
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      setError("Something went wrong");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center relative overflow-hidden px-4 lg:px-0">
      
      {/* Animated Background Blobs (Scaled down for Mobile) */}
      <div className="absolute top-0 -left-10 w-48 h-48 lg:w-96 lg:h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute top-0 -right-10 w-48 h-48 lg:w-96 lg:h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-10 w-48 h-48 lg:w-96 lg:h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>

      {/* Glass Card (Responsive Sizes) */}
      <div className="relative w-full max-w-sm lg:max-w-lg bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl p-6 lg:p-10 z-10 transition-all duration-300">
        
        <div className="text-center mb-6 lg:mb-10">
          <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">Welcome Back</h2>
          <p className="text-gray-500 text-xs lg:text-base mt-2 font-medium">Please enter your details to sign in.</p>
        </div>

        {/* Global Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-700 text-xs lg:text-sm rounded-xl flex items-center gap-2 animate-pulse">
            <AlertCircle size={16} /> {error}
          </div>
        )}

        {/* Social Buttons */}
        <div className="flex gap-3 lg:gap-4 mb-6">
          <button type="button" className="flex-1 flex items-center justify-center gap-2 py-2.5 lg:py-3 border border-gray-200 rounded-xl hover:bg-white transition-all text-xs lg:text-sm font-semibold text-gray-700 bg-white/40">
            <Chrome size={18} className="text-blue-600" /> Google
          </button>
          <button type="button" className="flex-1 flex items-center justify-center gap-2 py-2.5 lg:py-3 border border-gray-200 rounded-xl hover:bg-white transition-all text-xs lg:text-sm font-semibold text-gray-700 bg-white/40">
            <Github size={18} /> GitHub
          </button>
        </div>

        <div className="relative flex py-2 items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink-0 mx-4 text-gray-400 text-[10px] lg:text-xs font-bold uppercase tracking-widest">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
          
          <div className="group">
            <label className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Email Address</label>
            <div className="relative mt-1.5">
              <Mail className="absolute left-3 top-3 lg:top-4 text-gray-400 lg:w-5 lg:h-5" size={18} />
              <input 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="student@example.com"
                className="w-full pl-10 lg:pl-12 pr-4 py-2.5 lg:py-3.5 bg-white/60 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 font-medium text-gray-900 text-sm lg:text-base placeholder:text-gray-400 transition-all"
              />
            </div>
          </div>

          <div className="group">
            <label className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Password</label>
            <div className="relative mt-1.5">
              <Lock className="absolute left-3 top-3 lg:top-4 text-gray-400 lg:w-5 lg:h-5" size={18} />
              <input 
                name="password" 
                type="password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
                placeholder="••••••••"
                className="w-full pl-10 lg:pl-12 pr-4 py-2.5 lg:py-3.5 bg-white/60 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 font-medium text-gray-900 text-sm lg:text-base placeholder:text-gray-400 transition-all"
              />
            </div>
          </div>

          <button 
            disabled={isLoading} 
            className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 lg:py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 text-sm lg:text-base active:scale-95 transform"
          >
            {isLoading ? <><Loader2 size={20} className="animate-spin" /> Signing In...</> : <>Sign In <ArrowRight size={18} /></>}
          </button>
        </form>

        <p className="mt-6 lg:mt-8 text-center text-xs lg:text-sm text-gray-600 font-medium">
          Not a member yet? <Link href="/signup" className="font-bold text-blue-600 hover:underline">Register Now</Link>
        </p>
      </div>
    </div>
  );
}