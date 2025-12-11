// src/app/courses/[id]/page.js
"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Star, Clock, BookOpen, PlayCircle, ShieldCheck } from "lucide-react";

export default function CourseDetail() {
  const { id } = useParams();

  // Fake data lookup (Real app me database se aayega)
  return (
    <div className="min-h-screen bg-white pb-20">
      
      {/* Header Image Area */}
      <div className="relative h-64 lg:h-80 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900 opacity-90"></div>
        <div className="absolute inset-0 flex items-center justify-center">
           <h1 className="text-4xl lg:text-6xl font-black text-white/10 uppercase tracking-widest select-none">Course {id}</h1>
        </div>
        
        {/* Back Button */}
        <div className="absolute top-24 left-4 lg:left-8 z-20">
          <Link href="/courses" className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/20 transition-all flex">
            <ArrowLeft size={20} />
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-10">
        
        {/* Main Card */}
        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-6 md:p-10">
            
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
              <div>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                  Bestseller
                </span>
                <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-2">Complete Physics Mastery</h1>
                <p className="text-slate-500 font-medium">By Aditya Kumar • 4.9 <Star size={14} className="inline text-yellow-400 fill-yellow-400 mb-1" /></p>
              </div>
              <div className="text-left md:text-right bg-slate-50 p-4 rounded-2xl w-full md:w-auto">
                <p className="text-sm text-slate-400 line-through font-semibold">₹8,000</p>
                <p className="text-3xl font-black text-slate-900">₹4,999</p>
                <p className="text-[10px] text-green-600 font-bold uppercase">40% Off Limited Time</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Clock, label: "6 Months" },
                { icon: BookOpen, label: "120 Lectures" },
                { icon: PlayCircle, label: "Live + Rec" },
                { icon: ShieldCheck, label: "Certified" },
              ].map((f, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-3 flex flex-col items-center justify-center text-center">
                  <f.icon size={20} className="text-blue-600 mb-1" />
                  <span className="text-xs font-bold text-slate-700">{f.label}</span>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-4">What you'll learn</h3>
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              {['Complete NCERT Coverage', 'JEE Mains Level Problems', 'Weekly Doubt Sessions', 'Handwritten Notes PDF', 'Previous Year Questions', 'Test Series Included'].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-600 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-slate-900 text-white font-bold text-lg py-4 rounded-2xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30 active:scale-95">
              Enroll Now
            </button>
            <p className="text-center text-xs text-slate-400 mt-4">Safe & Secure Payment • 7-Day Refund Policy</p>

          </div>
        </div>

      </div>
    </div>
  );
}