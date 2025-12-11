// src/app/contact/page.js
"use client";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageSquare, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Yahan API call aayega future me
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-10 px-4 sm:px-6 relative overflow-hidden">
      
      {/* --- BACKGROUND ANIMATIONS --- */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] animate-blob pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-[100px] animate-blob animation-delay-2000 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-10 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-[10px] lg:text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm animate-bounce-slow">
            <MessageSquare size={12} /> We'd love to talk
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight mb-3">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-md mx-auto text-sm lg:text-base leading-relaxed">
            Have a question about courses or admissions? We are here to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* --- LEFT SIDE: INFO CARDS --- */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* ... (Cards code same as before, keeping design intact) ... */}
            <div className="group p-5 bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 group-hover:rotate-12 transition-transform shadow-sm">
                  <Phone size={22} />
                </div>
                <div>
                    <h3 className="text-base font-bold text-slate-900">Call Us</h3>
                    <a href="tel:+919330680642" className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    +91 9330680642 <ArrowRight size={14} />
                    </a>
                </div>
              </div>
            </div>

            <div className="group p-5 bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 group-hover:rotate-12 transition-transform shadow-sm">
                  <Mail size={22} />
                </div>
                <div>
                    <h3 className="text-base font-bold text-slate-900">Email Us</h3>
                    <a href="mailto:devsamp1st@gmail.com" className="text-purple-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    devsamp1st@gmail.com <ArrowRight size={14} />
                    </a>
                </div>
              </div>
            </div>

            <div className="group p-5 bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:rotate-12 transition-transform shadow-sm">
                  <MapPin size={22} />
                </div>
                <div>
                    <h3 className="text-base font-bold text-slate-900">Visit Campus</h3>
                    <p className="text-slate-500 text-xs font-semibold mt-0.5">123, Education Hub, New Delhi</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex p-5 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl text-white items-center gap-4 shadow-lg">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                    <Sparkles size={18} className="text-yellow-400" />
                </div>
                <div>
                    <p className="text-xs font-medium text-slate-300">Working Hours</p>
                    <p className="text-sm font-bold">Mon - Sat: 9AM - 8PM</p>
                </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <div className="lg:col-span-8">
            <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 lg:p-10 border border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.05)] h-full relative overflow-hidden flex flex-col justify-center">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-[80px] pointer-events-none"></div>

              {isSubmitted ? (
                <div className="text-center py-10 animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 max-w-sm mx-auto">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 px-6 py-3 bg-slate-900 text-white font-bold rounded-xl text-sm hover:bg-slate-800 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    Send a Message <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">Your Name</label>
                        <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold text-slate-800 placeholder:text-slate-400 text-sm" placeholder="Aditya Kumar" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">Phone Number</label>
                        <input type="tel" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold text-slate-800 placeholder:text-slate-400 text-sm" placeholder="+91 99999..." />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                      <input type="email" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold text-slate-800 placeholder:text-slate-400 text-sm" placeholder="student@example.com" />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">Message</label>
                      <textarea required rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold text-slate-800 placeholder:text-slate-400 text-sm resize-none" placeholder="I want to join the JEE Batch..."></textarea>
                    </div>

                    <button className="w-full bg-slate-900 text-white font-bold text-base py-4 rounded-2xl shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-slate-900/40 transform hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group">
                      Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}