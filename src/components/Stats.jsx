"use client";
import { useEffect, useState, useRef } from "react";
// Icons map karne ke liye import
import { Users, Trophy, Video, BookOpen, Star, TrendingUp } from "lucide-react";

const iconMap = {
  Users, Trophy, Video, BookOpen, Star, TrendingUp
};

// --- Counter Helper (Same as before) ---
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.5 });
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const endNum = parseInt(end.toString().replace(/,/g, ""), 10);
    const increment = endNum / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= endNum) { setCount(endNum); clearInterval(timer); } else { setCount(Math.ceil(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span ref={countRef}>{count.toLocaleString()}</span>;
};

const Stats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch('/api/stats').then(res => res.json()).then(data => {
      if(data.success) setStats(data.data);
    });
  }, []);

  if (stats.length === 0) return null; // Loading state skip kar sakte hain ya spinner dikha sakte hain

  return (
    <section className="py-12 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon] || Users; // Default Icon fallback
            return (
              <div key={stat._id} className="group relative bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`absolute top-0 left-4 right-4 h-1 rounded-b-lg bg-gradient-to-r ${stat.gradient}`}></div>
                <div className={`w-10 h-10 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-md mb-3 lg:mb-6`}>
                  <div className="scale-75 lg:scale-100 text-white"><Icon size={32} /></div>
                </div>
                <h3 className="text-2xl lg:text-4xl font-extrabold text-gray-900 mb-1 tracking-tight">
                  <Counter end={stat.value} />
                  <span className={`text-lg lg:text-2xl ml-1 text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>{stat.suffix}</span>
                </h3>
                <p className="text-sm lg:text-lg font-bold text-gray-800">{stat.label}</p>
                <p className="text-[10px] lg:text-xs text-gray-500 font-medium leading-tight mt-1 hidden sm:block">{stat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;