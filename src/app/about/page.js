// src/app/about/page.js
"use client";
import Link from "next/link";
import { 
  Award, Users, BookOpen, Target, Sparkles, 
  ArrowRight, GraduationCap, CheckCircle2, Heart 
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Students", value: "5000+", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Selections", value: "1200+", icon: Award, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Years Exp.", value: "10+", icon: BookOpen, color: "text-orange-600", bg: "bg-orange-50" },
  ];

  const values = [
    { title: "Quality Education", desc: "Premium content at affordable prices.", icon: <Sparkles size={20} /> },
    { title: "Personal Attention", desc: "Small batches for better focus.", icon: <Heart size={20} /> },
    { title: "Result Oriented", desc: "Proven track record of toppers.", icon: <Target size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        {/* Background Elements (Scaled down for mobile) */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-[600px] md:h-[600px] bg-blue-400/10 rounded-full blur-[60px] md:blur-[120px] pointer-events-none animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-[500px] md:h-[500px] bg-purple-400/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white border border-blue-100 text-blue-700 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 md:mb-6 shadow-sm animate-bounce-slow">
            <GraduationCap size={14} className="md:w-4 md:h-4" /> Since 2015
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-4 md:mb-6 leading-tight">
            We Don't Just Teach, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              We Create Legends.
            </span>
          </h1>
          <p className="text-sm md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
            Aditya Coaching Center is not just an institute; it's a family where dreams are nurtured, and champions are made.
          </p>
        </div>
      </section>

      {/* --- STATS STRIP (App-like: Horizontal Scroll on Mobile) --- */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 md:-mt-10 relative z-20">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-slate-100 p-4 md:p-8 
                        flex overflow-x-auto gap-4 snap-x no-scrollbar md:grid md:grid-cols-3 md:gap-8 md:overflow-visible
                        divide-x-0 md:divide-x divide-slate-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex-shrink-0 w-32 md:w-auto snap-center flex flex-col items-center text-center pt-2 md:pt-0">
              <div className={`w-10 h-10 md:w-12 md:h-12 ${stat.bg} ${stat.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-2 md:mb-3`}>
                <stat.icon size={20} className="md:w-6 md:h-6" />
              </div>
              <h3 className="text-xl md:text-3xl font-extrabold text-slate-900">{stat.value}</h3>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- FOUNDER STORY SECTION --- */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/5] bg-slate-200 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative shadow-xl md:shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-white">
                   <div className="text-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-md">
                        <Users size={32} className="md:w-10 md:h-10" />
                      </div>
                      <p className="text-xs md:text-sm font-bold opacity-50 uppercase">Founder Image</p>
                   </div>
                </div>
              </div>
              {/* Floating Quote */}
              <div className="absolute -bottom-4 right-2 md:-bottom-6 md:right-10 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-slate-100 max-w-[200px] md:max-w-xs animate-float-medium">
                <p className="text-slate-800 font-bold italic text-xs md:text-sm leading-relaxed">
                  "Education is the most powerful weapon..."
                </p>
                <p className="text-blue-600 font-bold text-[10px] md:text-xs mt-2">- Aditya Sir</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
              <h2 className="text-xs md:text-sm font-bold text-blue-600 uppercase tracking-wider flex items-center gap-2">
                <span className="w-6 md:w-8 h-[2px] bg-blue-600"></span> Meet the Mentor
              </h2>
              <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900">
                Hi, I am <span className="text-blue-600">Aditya Kumar.</span>
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                I started this journey with a simple vision: to simplify complex concepts for students. 
                Whether it's Physics or Mathematics, my goal is to make you fall in love with the subject.
              </p>
              
              <div className="pt-2 md:pt-4 grid grid-cols-2 gap-3 md:gap-4">
                {['Ex-IIT Faculty', '10+ Years Exp.', 'Physics Wizard', 'Motivational Speaker'].map((tag) => (
                  <div key={tag} className="flex items-center gap-2 text-slate-700 font-semibold text-xs md:text-sm">
                    <CheckCircle2 size={16} className="text-green-500 md:w-[18px] md:h-[18px]" /> {tag}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- MISSION & VALUES (Horizontal Scroll on Mobile) --- */}
      <section className="py-12 md:py-20 bg-slate-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Why Choose Us?</h2>
            <p className="text-sm md:text-base text-slate-500 mt-2">Our core values that drive your success.</p>
          </div>

          {/* MOBILE: Horizontal Scroll | DESKTOP: Grid */}
          <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 snap-x md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 md:mx-0 md:px-0 no-scrollbar">
            {values.map((val, idx) => (
              <div key={idx} className="flex-shrink-0 w-72 md:w-auto snap-center group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{val.title}</h4>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                  {val.desc} We ensure that every student gets the best resources to excel.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl md:rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-[-50%] left-[-20%] w-96 h-96 bg-blue-500/30 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-5xl font-extrabold text-white mb-4 md:mb-6">
              Ready to start your journey?
            </h2>
            <p className="text-slate-300 text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
              Join the league of toppers today. Enroll in our upcoming batch.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link href="/courses" className="px-6 py-3 md:px-8 md:py-4 bg-white text-slate-900 font-bold rounded-xl md:rounded-2xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2 text-sm md:text-base">
                Explore Courses <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="px-6 py-3 md:px-8 md:py-4 bg-transparent border border-slate-700 text-white font-bold rounded-xl md:rounded-2xl hover:bg-slate-800 transition-all text-sm md:text-base">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hide Scrollbar Style */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </div>
  );
}