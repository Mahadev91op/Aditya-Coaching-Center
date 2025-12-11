"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Redirect karne ke liye
import { User, Mail, Lock, ArrowRight, Github, Chrome, AlertCircle, Loader2 } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(""); // Server error dikhane ke liye

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
    setServerError(""); // Error clear karo jab user type kare
  };

  // Validation Logic
  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required.";
    if (!formData.email) {
      tempErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!formData.password) {
      tempErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle Submit (Real API Call)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

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
        // Success: User ko Login page pe bhejo
        alert("Registration Successful! Please Login.");
        router.push("/login"); 
      } else {
        // Error: Server se jo error aaya wo dikhao
        setServerError(data.message || "Registration failed.");
      }
    } catch (error) {
      setServerError("Something went wrong. Please check your internet.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center relative overflow-hidden px-4 py-10">
      
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000"></div>

      {/* Card */}
      <div className="relative w-full max-w-md bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl p-8 z-10 transition-all duration-300">
        
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Create Account</h2>
          <p className="text-gray-500 text-sm mt-2 font-medium">Join Aditya Coaching for free.</p>
        </div>

        {/* Global Server Error Message */}
        {serverError && (
          <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-700 text-sm rounded-lg flex items-center gap-2">
            <AlertCircle size={16} /> {serverError}
          </div>
        )}

        <div className="flex gap-4 mb-6">
          <button type="button" className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl hover:bg-white hover:border-gray-300 hover:shadow-md transition-all text-sm font-semibold text-gray-700 bg-white/40">
            <Chrome size={18} className="text-blue-600" /> Google
          </button>
          <button type="button" className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl hover:bg-white hover:border-gray-300 hover:shadow-md transition-all text-sm font-semibold text-gray-700 bg-white/40">
            <Github size={18} /> GitHub
          </button>
        </div>

        <div className="relative flex py-2 items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-bold uppercase tracking-widest">Or via email</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="group">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Full Name</label>
            <div className="relative mt-1.5">
              <User className={`absolute left-3 top-3.5 ${errors.name ? "text-red-500" : "text-gray-400 group-focus-within:text-blue-600"}`} size={18} />
              <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Aditya Kumar"
                className={`w-full pl-10 pr-4 py-3 bg-white/60 border rounded-xl outline-none shadow-sm font-medium text-gray-900 ${errors.name ? "border-red-500 bg-red-50/50" : "border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500"}`}
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
          </div>

          <div className="group">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Email Address</label>
            <div className="relative mt-1.5">
              <Mail className={`absolute left-3 top-3.5 ${errors.email ? "text-red-500" : "text-gray-400 group-focus-within:text-blue-600"}`} size={18} />
              <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="student@example.com"
                className={`w-full pl-10 pr-4 py-3 bg-white/60 border rounded-xl outline-none shadow-sm font-medium text-gray-900 ${errors.email ? "border-red-500 bg-red-50/50" : "border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500"}`}
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
          </div>

          <div className="group">
             <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Password</label>
            <div className="relative mt-1.5">
              <Lock className={`absolute left-3 top-3.5 ${errors.password ? "text-red-500" : "text-gray-400 group-focus-within:text-blue-600"}`} size={18} />
              <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Minimum 6 characters"
                className={`w-full pl-10 pr-4 py-3 bg-white/60 border rounded-xl outline-none shadow-sm font-medium text-gray-900 ${errors.password ? "border-red-500 bg-red-50/50" : "border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500"}`}
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1 ml-1">{errors.password}</p>}
          </div>

          <button disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg transform active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 mt-2">
            {isLoading ? <><Loader2 size={20} className="animate-spin" /> Creating Account...</> : <>Create Account <ArrowRight size={18} /></>}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 font-medium">
          Already have an account? <Link href="/login" className="font-bold text-blue-600 hover:underline">Log In here</Link>
        </p>
      </div>
    </div>
  );
}