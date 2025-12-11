// src/components/CourseCard.jsx
"use client";
import Link from "next/link";
import { Star, ArrowRight, CheckCircle, Users } from "lucide-react";

const CourseCard = ({ course }) => {
  // 1. Color Mapping (Taaki Tailwind classes miss na kare)
  const gradientMap = {
    blue: "bg-gradient-to-r from-blue-500 to-indigo-600",
    orange: "bg-gradient-to-r from-orange-500 to-red-600",
    green: "bg-gradient-to-r from-green-500 to-emerald-600",
    purple: "bg-gradient-to-r from-purple-500 to-pink-600",
    pink: "bg-gradient-to-r from-pink-500 to-rose-600",
    cyan: "bg-gradient-to-r from-cyan-500 to-blue-600",
    yellow: "bg-gradient-to-r from-yellow-400 to-orange-500",
    emerald: "bg-gradient-to-r from-emerald-500 to-teal-600",
  };

  // 2. Fallback color agar koi match na ho
  const headerGradient = gradientMap[course.color] || gradientMap["blue"];

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      
      {/* 3. Use 'headerGradient' class here */}
      <div className={`h-32 lg:h-40 ${headerGradient} relative p-4 lg:p-6 flex flex-col justify-between`}>
        <div className="flex justify-between items-start">
           <span className="bg-white/20 backdrop-blur-md text-white text-[10px] lg:text-xs font-bold px-2 py-1 rounded-full">
             Live Batch
           </span>
           <div className="bg-white text-gray-900 text-[10px] lg:text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1">
             <Star size={10} className="text-yellow-500 fill-yellow-500" /> {course.rating}
           </div>
        </div>
        <h3 className="text-xl lg:text-2xl font-bold text-white drop-shadow-md truncate">{course.title}</h3>
      </div>

      {/* Compact Body */}
      <div className="p-4 lg:p-6 flex-1 flex flex-col">
        
        <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                <CheckCircle size={12} className="text-blue-600" /> {course.tutor}
            </div>
            {course.students && (
                <div className="flex items-center gap-1 text-[10px] text-gray-400 font-medium">
                    <Users size={12} /> {course.students}
                </div>
            )}
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
            {course.tags?.map((tag, i) => (
                <span key={i} className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                {tag}
                </span>
            ))}
        </div>

        <div className="flex items-center justify-between border-t border-gray-50 pt-3 lg:pt-4 mt-auto">
          <div>
            <p className="text-[10px] lg:text-xs text-gray-400 line-through font-medium">{course.originalPrice}</p>
            <p className="text-xl lg:text-2xl font-bold text-gray-900">{course.price}</p>
          </div>
          {/* Link me ID check lagaya hai taaki undefined error na aaye */}
          <Link href={`/courses/${course.id || course._id}`} className="bg-gray-900 text-white px-4 py-2 rounded-xl font-bold text-xs lg:text-sm hover:bg-blue-600 transition-colors flex items-center gap-1 shadow-lg hover:shadow-blue-500/30 active:scale-95">
            Enroll <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CourseCard;