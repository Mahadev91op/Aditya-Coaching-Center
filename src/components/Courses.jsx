"use client";
import { useState } from "react";
import Link from "next/link";
import { Star, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const Courses = () => {
  const [activeTab, setActiveTab] = useState("all");

  const courses = [
    {
      id: 1,
      category: "class12",
      title: "Class 12 Science",
      tutor: "Aditya Sir",
      rating: 4.9,
      price: "₹4,999",
      oldPrice: "₹8,000",
      color: "from-blue-500 to-indigo-600",
      tags: ["Physics", "Maths"]
    },
    {
      id: 2,
      category: "jee",
      title: "JEE Mains 2025",
      tutor: "IIT Faculty",
      rating: 5.0,
      price: "₹12,999",
      oldPrice: "₹25,000",
      color: "from-orange-500 to-red-600",
      tags: ["Live", "Tests"]
    },
    {
      id: 3,
      category: "class10",
      title: "Class 10 Foundation",
      tutor: "Riya Ma'am",
      rating: 4.8,
      price: "₹3,499",
      oldPrice: "₹6,000",
      color: "from-green-500 to-emerald-600",
      tags: ["Sci", "Maths"]
    },
    {
      id: 4,
      category: "class12",
      title: "Commerce Pro",
      tutor: "CA Ankit",
      rating: 4.7,
      price: "₹4,500",
      oldPrice: "₹7,500",
      color: "from-purple-500 to-pink-600",
      tags: ["Acc", "Eco"]
    },
    {
      id: 5,
      category: "jee",
      title: "NEET Dropper",
      tutor: "Dr. Verma",
      rating: 4.9,
      price: "₹11,999",
      oldPrice: "₹22,000",
      color: "from-cyan-500 to-blue-600",
      tags: ["Bio", "Chem"]
    },
    {
      id: 6,
      category: "class10",
      title: "Math Olympiad",
      tutor: "Aditya Sir",
      rating: 5.0,
      price: "₹1,999",
      oldPrice: "₹3,000",
      color: "from-yellow-400 to-orange-500",
      tags: ["Logic", "Math"]
    },
  ];

  const filteredCourses = activeTab === "all" 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  return (
    <section className="py-12 lg:py-24 bg-gray-50" id="courses">
      <div className="max-w-7xl mx-auto">
        
        {/* Compact Header */}
        <div className="text-center mb-6 lg:mb-12 px-4">
          <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-[10px] lg:text-sm mb-2">
            <Sparkles size={12} className="text-yellow-500" /> Top Batches
          </div>
          <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">Explore Courses</h3>
        </div>

        {/* Scrollable Tabs (Pills) */}
        <div className="flex overflow-x-auto no-scrollbar px-4 pb-4 gap-3 mb-4 lg:mb-8 lg:justify-center snap-x">
          {["all", "class12", "class10", "jee"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 snap-center px-5 py-2 rounded-full text-xs lg:text-sm font-bold transition-all border ${
                activeTab === tab
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white text-gray-600 border-gray-200"
              }`}
            >
              {tab === "all" ? "All" : tab === "jee" ? "JEE/NEET" : tab.replace("class", "Class ")}
            </button>
          ))}
        </div>

        {/* --- CARDS CONTAINER (Grid on PC, Swipe on Mobile) --- */}
        <div className="flex overflow-x-auto gap-4 px-4 pb-8 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-8 lg:px-8 lg:overflow-visible no-scrollbar">
          
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              // Mobile: Fixed Width (80% screen) for peeking effect
              // Desktop: Normal Grid behaviour
              className="flex-shrink-0 w-[80vw] sm:w-[350px] lg:w-auto snap-center group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              
              {/* Compact Header (Gradient) */}
              <div className={`h-32 lg:h-40 bg-gradient-to-r ${course.color} relative p-4 lg:p-6 flex flex-col justify-between`}>
                <div className="flex justify-between items-start">
                   <span className="bg-white/20 backdrop-blur-md text-white text-[10px] lg:text-xs font-bold px-2 py-1 rounded-full">
                     Live
                   </span>
                   <div className="bg-white text-gray-900 text-[10px] lg:text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                     <Star size={10} className="text-yellow-500 fill-yellow-500" /> {course.rating}
                   </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white drop-shadow-md truncate">{course.title}</h3>
              </div>

              {/* Compact Body */}
              <div className="p-4 lg:p-6">
                
                {/* Tutor & Tags */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                        <CheckCircle size={12} className="text-blue-500" /> {course.tutor}
                    </div>
                    <div className="flex gap-1">
                        {course.tags.map((tag, i) => (
                            <span key={i} className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                            {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Footer: Price & Btn */}
                <div className="flex items-center justify-between border-t border-gray-50 pt-3 lg:pt-4">
                  <div>
                    <p className="text-[10px] lg:text-xs text-gray-400 line-through font-medium">{course.oldPrice}</p>
                    <p className="text-xl lg:text-2xl font-bold text-gray-900">{course.price}</p>
                  </div>
                  <Link href={`/courses/${course.id}`} className="bg-gray-900 text-white px-4 py-2 rounded-xl font-bold text-xs lg:text-sm hover:bg-blue-600 transition-colors flex items-center gap-1">
                    Enroll <ArrowRight size={14} />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center lg:mt-8">
            <Link href="/courses" className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold hover:underline">
                View All Batches <ArrowRight size={16} />
            </Link>
        </div>

      </div>

      {/* Hide Scrollbar CSS */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Courses;