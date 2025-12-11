"use client";
import { Star, Quote, BadgeCheck, Sparkles } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Class 12 Sc.",
      result: "96% Boards",
      content: "Aditya Sir ke physics concepts lajawab hain! Ratta maarne ki zarurat hi nahi padi. Confidence alag level par tha.",
      color: "blue"
    },
    {
      name: "Priya Verma",
      role: "NEET Aspirant",
      result: "AIR 4500",
      content: "Yahan ka test series aur doubt support best hai. Raat ke 11 baje bhi teachers doubt solve karte hain.",
      color: "pink"
    },
    {
      name: "Amit Gupta",
      role: "Class 10",
      result: "98% Maths",
      content: "Maths mera weakest subject tha, ab strongest hai. Foundation batch ne mera base bahut strong kar diya.",
      color: "green"
    },
    {
      name: "Sneha Reddy",
      role: "JEE Dropper",
      result: "99.5%tile",
      content: "Dropper batch ka structure bahut disciplined hai. Daily targets aur weekly analysis ne mujhe track par rakha.",
      color: "purple"
    },
    {
      name: "Vikram Singh",
      role: "Parent",
      result: "Son in IIT-D",
      content: "As a parent, main bahut satisfied hun. Regular PTMs aur performance updates milti rehti hain.",
      color: "orange"
    },
    {
      name: "Anjali Mehta",
      role: "Commerce",
      result: "Topper",
      content: "Accounts aur Economics ke teachers bahut experienced hain. Concepts ko real life examples se samjhate hain.",
      color: "cyan"
    },
  ];

  // --- REVIEW CARD COMPONENT (Responsive) ---
  const ReviewCard = ({ review }) => (
    <div className="
      flex-shrink-0 
      w-[85vw] sm:w-[350px] md:w-[400px] 
      p-5 lg:p-6 
      bg-white rounded-2xl lg:rounded-3xl 
      border border-gray-100 shadow-sm hover:shadow-md 
      transition-all duration-300 
      mx-2 lg:mx-4 
      snap-center
      relative group
    ">
      
      {/* Quote Icon BG */}
      <div className="absolute top-4 right-4 text-gray-100 group-hover:text-blue-50 transition-colors">
        <Quote size={32} className="lg:w-10 lg:h-10" />
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-3 lg:mb-4 relative z-10">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} size={12} className="text-yellow-400 fill-yellow-400 lg:w-4 lg:h-4" />
        ))}
      </div>

      {/* Content (Truncated for mobile layout neatness) */}
      <p className="text-gray-600 leading-relaxed mb-4 lg:mb-6 relative z-10 text-sm lg:text-base line-clamp-3 lg:line-clamp-none">
        "{review.content}"
      </p>

      {/* User Info */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-${review.color}-100 border-2 border-${review.color}-200 flex items-center justify-center text-${review.color}-600 font-bold text-xs lg:text-sm`}>
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-gray-900 flex items-center gap-1 text-sm lg:text-base">
            {review.name} <BadgeCheck size={12} className="text-blue-500 lg:w-3.5 lg:h-3.5" />
          </h4>
          <div className="text-[10px] lg:text-xs text-gray-500 flex items-center gap-2">
            <span>{review.role}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className={`font-semibold text-${review.color}-600`}>{review.result}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 lg:py-24 bg-gray-50 overflow-hidden relative">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-16 px-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] lg:text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles size={12} className="text-yellow-500" /> Student Feedback
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Loved by <span className="text-blue-600">Thousands</span>
        </h2>
        <p className="text-sm lg:text-lg text-gray-600">
          Real stories from our toppers.
        </p>
      </div>

      {/* --- MOBILE VIEW: SINGLE SWIPE ROW --- */}
      <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 pb-4 gap-2">
        {reviews.map((review, idx) => (
          <ReviewCard key={`mob-${idx}`} review={review} />
        ))}
      </div>

      {/* --- DESKTOP VIEW: INFINITE SCROLL (DOUBLE ROW) --- */}
      <div className="hidden lg:block relative z-10 group">
        {/* FADE EDGES */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-20 pointer-events-none"></div>

        {/* Row 1 */}
        <div className="flex mb-8 animate-scroll-left group-hover:pause">
          {[...reviews, ...reviews].map((review, idx) => (
            <ReviewCard key={`top-${idx}`} review={review} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex animate-scroll-right group-hover:pause">
          {[...reviews.reverse(), ...reviews].map((review, idx) => (
            <ReviewCard key={`bottom-${idx}`} review={review} />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        .animate-scroll-left { animation: scrollLeft 40s linear infinite; }
        .animate-scroll-right { animation: scrollRight 50s linear infinite; }
        .group-hover\\:pause:hover .animate-scroll-left,
        .group-hover\\:pause:hover .animate-scroll-right { animation-play-state: paused; }
        @keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        
        /* Hide Scrollbar */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Testimonials;