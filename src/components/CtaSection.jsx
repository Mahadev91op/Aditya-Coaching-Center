"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Phone, Send, CheckCircle2 } from "lucide-react";

const CtaSection = () => {
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setIsSubmitted(true);
      setTimeout(() => {
        setPhone("");
        setIsSubmitted(false);
        alert("Thanks! Our counselor will call you shortly.");
      }, 3000);
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  return (
    <section className="py-8 lg:py-20 px-3 lg:px-4 bg-white">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Floating Container (Mobile: Less Padding, Desktop: More Padding) */}
        <div className="relative overflow-hidden rounded-3xl lg:rounded-[2.5rem] bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-900 shadow-xl lg:shadow-2xl shadow-blue-900/30 px-5 py-10 lg:px-16 lg:py-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-60 h-60 lg:w-80 lg:h-80 rounded-full bg-blue-500/20 blur-[60px] lg:blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 lg:w-80 lg:h-80 rounded-full bg-purple-500/20 blur-[60px] lg:blur-[80px] pointer-events-none"></div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-[10px] lg:text-sm font-bold uppercase tracking-wider mb-4 animate-pulse">
              <Sparkles size={12} className="text-yellow-400" /> New Batches Open
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-3 lg:mb-6">
              Start your <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                Success Journey
              </span>
            </h2>
            
            <p className="text-blue-100 text-sm lg:text-lg mb-6 leading-relaxed">
              Don't just study hard, study <strong>Smart</strong>. Join Aditya Coaching for premium notes & expert mentorship.
            </p>

            {/* Benefits (Mobile: Smaller text) */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start text-xs lg:text-sm font-medium text-blue-200">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-400" /> Free Demo Class</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-400" /> 7-Day Money Back</span>
            </div>
          </div>

          {/* --- RIGHT SIDE: ACTION CARD (Compact for Mobile) --- */}
          <div className="relative z-10 w-full max-w-sm bg-white/10 backdrop-blur-lg border border-white/20 p-5 lg:p-6 rounded-2xl lg:rounded-3xl shadow-lg">
            
            <div className="text-center md:text-left mb-4">
               <h3 className="text-lg lg:text-xl font-bold text-white">Request a Call Back</h3>
               <p className="text-blue-200 text-xs lg:text-sm">Leave your number, we'll guide you.</p>
            </div>

            {isSubmitted ? (
              <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-center">
                <CheckCircle2 size={32} className="text-green-400 mx-auto mb-2" />
                <p className="text-white font-bold">Request Sent!</p>
                <p className="text-blue-100 text-xs">We will call you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <Phone className="absolute left-4 top-3 text-blue-300" size={18} />
                  <input 
                    type="tel" 
                    placeholder="Phone number" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-blue-950/50 border border-blue-700/50 text-white placeholder-blue-400/70 pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-sm"
                    required
                  />
                </div>
                <button className="w-full bg-white hover:bg-gray-50 text-blue-900 font-bold py-3 rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 text-sm lg:text-base">
                  Get a Call Now <Send size={16} />
                </button>
              </form>
            )}

            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="h-px bg-white/20 flex-1"></div>
              <span className="text-blue-300 text-[10px] uppercase font-bold">OR</span>
              <div className="h-px bg-white/20 flex-1"></div>
            </div>

            <Link href="/signup" className="block mt-3 text-center text-white font-semibold hover:text-blue-200 transition-colors text-xs lg:text-sm">
               Register Online <ArrowRight size={12} className="inline ml-1" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;