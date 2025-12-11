"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, ArrowRight, Github, Chrome, AlertCircle, Loader2 } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setServerError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setServerError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account created! Please Login.");
        router.push("/login");
      } else {
        setServerError(data.message || "Registration failed.");
      }
    } catch (error) {
      setServerError("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center relative overflow-hidden px-4 lg:px-0 py-10">
      
      {/* Background Blobs (Mobile Scaled) */}
      <div className="absolute top-0 -left-10 w-48 h-48 lg:w-96 lg:h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute top-0 -right-10 w-48 h-48 lg:w-96 lg:h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-10 w-48 h-48 lg:w-96 lg:h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>

      {/* Glass Card */}
      <div className="relative w-full max-w-sm lg:max-w-lg bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl p-6 lg:p-10 z-10 transition-all duration-300">
        
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">Create Account</h2>
          <p className="text-gray-500 text-xs lg:text-base mt-2 font-medium">Join Aditya Coaching for free.</p>
        </div>

        {serverError && (
          <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-700 text-xs lg:text-sm rounded-xl flex items-center gap-2 animate-pulse">
            <AlertCircle size={16} /> {serverError}
          </div>
        )}

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
          <span className="flex-shrink-0 mx-4 text-gray-400 text-[10px] lg:text-xs font-bold uppercase tracking-widest">Or via email</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-5">
          
          <div className="group">
            <label className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Full Name</label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-2.5 lg:top-3.5 text-gray-400 lg:w-5 lg:h-5" size={18} />
              <input name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="Aditya Kumar"
                className="w-full pl-10 lg:pl-12 pr-4 py-2.5 lg:py-3.5 bg-white/60 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 font-medium text-gray-900 text-sm lg:text-base placeholder:text-gray-400 transition-all"
              />
            </div>
          </div>

          <div className="group">
            <label className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Email Address</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-2.5 lg:top-3.5 text-gray-400 lg:w-5 lg:h-5" size={18} />
              <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="student@example.com"
                className="w-full pl-10 lg:pl-12 pr-4 py-2.5 lg:py-3.5 bg-white/60 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 font-medium text-gray-900 text-sm lg:text-base placeholder:text-gray-400 transition-all"
              />
            </div>
          </div>

          <div className="group">
             <label className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Password</label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-2.5 lg:top-3.5 text-gray-400 lg:w-5 lg:h-5" size={18} />
              <input name="password" type="password" value={formData.password} onChange={handleChange} required placeholder="Min 6 chars"
                className="w-full pl-10 lg:pl-12 pr-4 py-2.5 lg:py-3.5 bg-white/60 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 font-medium text-gray-900 text-sm lg:text-base placeholder:text-gray-400 transition-all"
              />
            </div>
          </div>

          <button disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 lg:py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 text-sm lg:text-base active:scale-95 transform mt-2">
            {isLoading ? <><Loader2 size={20} className="animate-spin" /> Creating...</> : <>Create Account <ArrowRight size={18} /></>}
          </button>
        </form>

        <p className="mt-6 lg:mt-8 text-center text-xs lg:text-sm text-gray-600 font-medium">
          Already have an account? <Link href="/login" className="font-bold text-blue-600 hover:underline">Log In here</Link>
        </p>
      </div>
    </div>
  );
}