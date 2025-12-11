"use client";
import Link from "next/link";
import { ArrowRight, PlayCircle, CheckCircle2, Atom, Calculator, Activity, Users } from "lucide-react";

const HeroSection = () => {
  return (
    // Padding kam ki mobile ke liye (pt-24 instead of pt-32)
    <section className="relative pt-24 pb-12 lg:pt-40 lg:pb-28 overflow-hidden bg-gray-50">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-20 left-[-10%] w-72 h-72 lg:w-96 lg:h-96 bg-blue-400/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-[-10%] w-72 h-72 lg:w-96 lg:h-96 bg-purple-400/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* ================= LEFT SIDE (Text) ================= */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 lg:space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 font-semibold text-xs lg:text-sm animate-fade-in-up">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              Admissions Open: Class 9th - 12th
            </div>

            {/* Responsive Text Size */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Academic Potential
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 lg:px-0">
              **Aditya Coaching Center** par hum banate hain **Toppers**. 
              Science, Maths, aur Competitive Exams ki smart tayari.
            </p>

            {/* Buttons Stack on very small screens */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start w-full">
              <Link href="/signup" className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2">
                Join for Free <ArrowRight size={20} />
              </Link>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-700 border border-gray-200 font-bold rounded-xl active:bg-gray-50 transition-all flex items-center justify-center gap-2">
                <PlayCircle size={20} className="text-blue-600" /> Watch Demo
              </button>
            </div>

            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Proven Results</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Expert Faculty</div>
            </div>
          </div>

          {/* ================= RIGHT SIDE (Live Class Card) ================= */}
          <div className="w-full lg:w-1/2 relative perspective-1000 mt-6 lg:mt-0">
            
            {/* Card width mobile par full rakha hai */}
            <div className="relative z-20 bg-gray-900/95 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl overflow-hidden transform lg:rotate-y-12 hover:rotate-0 transition-transform duration-500 animate-float-slow w-full max-w-md mx-auto">
              
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900/50">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                  </div>
                  <span className="text-white font-bold text-xs tracking-wider">LIVE CLASS</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs font-mono">
                  <Users size={14} /> 1.2k Watching
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="mb-4">
                    <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Chapter 4</p>
                    <h3 className="text-xl lg:text-2xl font-bold text-white">Wave Optics & Sound</h3>
                </div>

                {/* Graph */}
                <div className="h-28 lg:h-32 w-full bg-gray-800/50 rounded-xl border border-gray-700 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  <svg viewBox="0 0 100 40" className="w-full h-full text-blue-500 stroke-current stroke-2 fill-none relative z-10 opacity-80">
                    <path d="M0 20 Q 12.5 5, 25 20 T 50 20 T 75 20 T 100 20" className="animate-pulse">
                      <animate attributeName="d" dur="3s" repeatCount="indefinite" values="M0 20 Q 12.5 5, 25 20 T 50 20 T 75 20 T 100 20; M0 20 Q 12.5 35, 25 20 T 50 20 T 75 20 T 100 20; M0 20 Q 12.5 5, 25 20 T 50 20 T 75 20 T 100 20" />
                    </path>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg">
                       <PlayCircle size={24} className="text-white fill-current" />
                    </div>
                  </div>
                </div>

                {/* Teacher */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm border-2 border-gray-800">AK</div>
                     <div>
                        <p className="text-white text-sm font-bold">Aditya Sir</p>
                        <p className="text-gray-500 text-xs">Physics Expert</p>
                     </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg shadow-lg">Join Now</button>
                </div>
              </div>
            </div>

            {/* Floating Icons (Hidden on very small screens to save space) */}
            <div className="absolute top-10 -right-4 p-3 bg-white rounded-2xl shadow-xl animate-float-medium z-30 hidden sm:block">
              <Atom size={28} className="text-blue-600" />
            </div>
            <div className="absolute bottom-20 -left-8 p-3 bg-white rounded-2xl shadow-xl animate-float-slow animation-delay-2000 z-30 hidden sm:block">
              <Calculator size={28} className="text-green-600" />
            </div>
            <div className="absolute top-1/2 -right-8 p-3 bg-white rounded-xl shadow-lg animate-float-medium animation-delay-4000 z-10 hidden sm:block">
              <Activity size={20} className="text-orange-500" />
            </div>

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-[80px] opacity-20 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;