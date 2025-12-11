"use client";
import { 
  BrainCircuit, 
  Target, 
  Video, 
  Users, 
  BarChart3, 
  Clock, 
  Zap,
  Sparkles
} from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Live Classes", // Shortened title for mobile
      desc: "2-way interactive classes. Feel like real classroom.",
      icon: <Video size={24} className="text-white" />,
      // Mobile: col-span-2 (Full Width), Desktop: col-span-2
      colSpan: "col-span-2 md:col-span-2", 
      bg: "bg-gradient-to-r from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/20",
      text: "text-white",
      subText: "text-blue-50"
    },
    {
      title: "Mentorship",
      desc: "1-on-1 Guide.",
      icon: <Users size={24} className="text-purple-600" />,
      // Mobile: col-span-1 (Half Width), Desktop: col-span-1
      colSpan: "col-span-1 md:col-span-1",
      bg: "bg-white",
      border: "border-purple-100",
      iconBg: "bg-purple-100",
      shadow: "shadow-purple-500/10",
      text: "text-gray-900",
      subText: "text-gray-500"
    },
    {
      title: "Analytics",
      desc: "Track Progress.",
      icon: <BarChart3 size={24} className="text-green-600" />,
      // Mobile: col-span-1 (Half Width), Desktop: col-span-1
      colSpan: "col-span-1 md:col-span-1",
      bg: "bg-white",
      border: "border-green-100",
      iconBg: "bg-green-100",
      shadow: "shadow-green-500/10",
      text: "text-gray-900",
      subText: "text-gray-500"
    },
    {
      title: "Full Syllabus",
      desc: "Exam pattern covered completely.",
      icon: <Target size={24} className="text-white" />,
      // Mobile: col-span-2 (Full Width), Desktop: col-span-2
      colSpan: "col-span-2 md:col-span-2",
      bg: "bg-gradient-to-r from-orange-400 to-pink-500",
      shadow: "shadow-orange-500/20",
      text: "text-white",
      subText: "text-orange-50"
    },
  ];

  return (
    <section className="py-12 lg:py-24 bg-gray-50 relative overflow-hidden">
      
      {/* Background Blobs (Scaled down for mobile) */}
      <div className="absolute top-0 -left-4 w-48 h-48 lg:w-96 lg:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-48 h-48 lg:w-96 lg:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 text-blue-600 text-[10px] lg:text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
             <Sparkles size={12} className="text-yellow-500" /> Why Choose Us?
          </div>
          <h3 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-2 leading-tight">
            We don't just teach, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              We shape careers.
            </span>
          </h3>
        </div>

        {/* BENTO GRID (Mobile: 2 Cols, Desktop: 3 Cols) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6">
          
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl p-4 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl 
              ${feature.colSpan} 
              ${feature.bg} 
              ${feature.border ? `border ${feature.border}` : ''} 
              ${feature.shadow}`}
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    {/* Compact Icon */}
                    <div className={`mb-3 lg:mb-6 p-2 lg:p-4 rounded-xl lg:rounded-2xl w-fit ${feature.iconBg ? feature.iconBg : 'bg-white/20 backdrop-blur-md'} group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    
                    {/* Compact Text */}
                    <h4 className={`text-lg lg:text-2xl font-bold mb-1 lg:mb-3 ${feature.text}`}>
                        {feature.title}
                    </h4>
                    
                    <p className={`leading-snug text-xs lg:text-base ${feature.subText} ${feature.colSpan.includes('col-span-1') ? 'line-clamp-2' : ''}`}>
                        {feature.desc}
                    </p>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom Row - Horizontal Scroll on Mobile (App Feel) */}
          <div className="col-span-2 md:col-span-3 mt-2">
             <div className="flex overflow-x-auto gap-3 pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible scrollbar-hide snap-x">
               
               {/* Card 1 */}
               <div className="flex-shrink-0 w-64 md:w-auto snap-center flex items-center gap-3 p-4 lg:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg">
                      <BrainCircuit size={20} />
                  </div>
                  <div>
                     <h5 className="font-bold text-gray-900 text-sm">Doubt Solving</h5>
                     <p className="text-[10px] lg:text-xs text-gray-500">24/7 Expert Support</p>
                  </div>
               </div>

               {/* Card 2 */}
               <div className="flex-shrink-0 w-64 md:w-auto snap-center flex items-center gap-3 p-4 lg:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="p-2 bg-cyan-50 text-cyan-600 rounded-lg">
                      <Clock size={20} />
                  </div>
                  <div>
                     <h5 className="font-bold text-gray-900 text-sm">Flexible Timing</h5>
                     <p className="text-[10px] lg:text-xs text-gray-500">Recorded Sessions</p>
                  </div>
               </div>

               {/* Card 3 */}
               <div className="flex-shrink-0 w-64 md:w-auto snap-center flex items-center gap-3 p-4 lg:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                      <Zap size={20} />
                  </div>
                  <div>
                     <h5 className="font-bold text-gray-900 text-sm">Fast Revision</h5>
                     <p className="text-[10px] lg:text-xs text-gray-500">Short Notes & Maps</p>
                  </div>
               </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;