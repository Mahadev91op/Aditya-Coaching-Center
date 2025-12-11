// src/app/courses/page.js
"use client";
import { useState, useEffect } from "react";
import CourseCard from "@/components/CourseCard";
import { Search, Sparkles, Loader2 } from "lucide-react";

export default function AllCourses() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Default Fallback Data (Agar API fail ho ya load na ho)
  const defaultCourses = [
    {
      id: 1,
      category: "class12",
      title: "Class 12 Physics Masterclass",
      tutor: "Aditya Sir",
      rating: 4.9,
      students: "2.5k",
      price: "₹4,999",
      originalPrice: "₹8,000",
      tags: ["Live Classes", "PDF Notes"],
      color: "blue", // Simple name use karein
    },
    {
      id: 2,
      category: "jee",
      title: "JEE Mains Mathematics 2025",
      tutor: "IIT Faculty",
      rating: 5.0,
      students: "1.8k",
      price: "₹12,999",
      originalPrice: "₹25,000",
      tags: ["Mock Tests", "Doubt Solving"],
      color: "orange",
    },
    {
      id: 3,
      category: "class10",
      title: "Class 10 Foundation Batch",
      tutor: "Riya Ma'am",
      rating: 4.8,
      students: "3k+",
      price: "₹3,499",
      originalPrice: "₹6,000",
      tags: ["Science", "Maths"],
      color: "green",
    },
    {
      id: 4,
      category: "jee",
      title: "NEET Biology Crash Course",
      tutor: "Dr. Verma",
      rating: 4.9,
      students: "4k",
      price: "₹8,999",
      originalPrice: "₹15,000",
      tags: ["Daily DPP", "Live"],
      color: "purple",
    },
    {
      id: 5,
      category: "class12",
      title: "Chemistry Organic Special",
      tutor: "Aditya Sir",
      rating: 4.7,
      students: "1.2k",
      price: "₹3,999",
      originalPrice: "₹5,000",
      tags: ["Recorded", "Tricks"],
      color: "pink",
    },
    {
      id: 6,
      category: "class10",
      title: "Math Olympiad Booster",
      tutor: "Aditya Sir",
      rating: 5.0,
      students: "800+",
      price: "₹1,999",
      originalPrice: "₹3,000",
      tags: ["Logic", "Math"],
      color: "yellow",
    }
  ];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/courses");
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          setCourses(data.data);
        } else {
          setCourses(defaultCourses); // API empty ho to default dikhayein
        }
      } catch (error) {
        console.error("Failed to fetch courses");
        setCourses(defaultCourses);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const filtered = courses.filter(course => {
    const matchesCategory = filter === "all" || course.category === filter;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 px-4 sm:px-6">
      <div className="fixed top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50 to-transparent -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-4 shadow-sm animate-bounce-slow">
            <Sparkles size={12} /> Explore Our Batches
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Perfect Course</span>
          </h1>
          <p className="text-slate-500 max-w-lg mx-auto text-sm md:text-base">
            Structured courses designed by experts to help you crack your exams.
          </p>
        </div>

        {/* Controls */}
        <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-xl border border-slate-200 shadow-sm rounded-2xl p-2 mb-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search courses..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white border-transparent focus:border-blue-200 rounded-xl pl-10 pr-4 py-3 text-sm font-semibold text-slate-900 placeholder:text-slate-400 outline-none transition-all" 
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 no-scrollbar items-center px-1">
              {[
                { id: 'all', label: 'All' },
                { id: 'class12', label: 'Class 12' },
                { id: 'class10', label: 'Class 10' },
                { id: 'jee', label: 'JEE / NEET' }
              ].map((cat) => (
                <button 
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                    filter === cat.id 
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md' 
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Loading & Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map(course => (
              <CourseCard key={course.id || course._id} course={course} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <Search size={32} className="text-slate-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">No courses found</h3>
            <p className="text-slate-500 text-sm mb-4">Try searching for something else.</p>
            <button 
              onClick={() => {setFilter('all'); setSearchQuery('');}}
              className="px-5 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}