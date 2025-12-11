// src/app/dashboard/page.js
"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BookOpen, Clock, Trophy, PlayCircle, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Protect Route: Agar user login nahi hai to login page par bhej do
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      setLoading(false);
    }
  }, [status, router]);

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Dummy Data for UI (Baad me database se aayega)
  const myCourses = [
    {
      id: 1,
      title: "Class 12 Physics Masterclass",
      progress: 65,
      nextLesson: "Wave Optics - Lecture 4",
      thumbnail: "from-blue-500 to-indigo-600",
    },
    {
      id: 2,
      title: "JEE Mains Mathematics",
      progress: 30,
      nextLesson: "Calculus - Integration Basics",
      thumbnail: "from-orange-500 to-red-600",
    },
  ];

  const upcomingClasses = [
    { subject: "Chemistry", topic: "Organic Reactions", time: "Today, 6:00 PM", tutor: "Dr. Verma" },
    { subject: "Physics", topic: "Magnetism Doubt Class", time: "Tomorrow, 4:00 PM", tutor: "Aditya Sir" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Welcome back, <span className="text-blue-600">{session?.user?.name?.split(" ")[0]}!</span> 👋
            </h1>
            <p className="text-gray-500 text-sm mt-1">Let's continue your learning journey.</p>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Current Plan</p>
            <p className="text-sm font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block mt-1">
              Premium Member
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <BookOpen size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">4</p>
              <p className="text-xs text-gray-500 font-medium">Active Courses</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">12h</p>
              <p className="text-xs text-gray-500 font-medium">Hours Studied</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-xl">
              <Trophy size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">85%</p>
              <p className="text-xs text-gray-500 font-medium">Avg. Score</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content: My Courses */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">My Courses</h2>
              <button className="text-sm text-blue-600 font-semibold hover:underline">View All</button>
            </div>

            <div className="space-y-4">
              {myCourses.map((course) => (
                <div key={course.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-4 group">
                  {/* Thumbnail */}
                  <div className={`w-full sm:w-32 h-32 sm:h-24 rounded-xl bg-gradient-to-br ${course.thumbnail} flex items-center justify-center text-white shrink-0`}>
                    <PlayCircle size={32} className="opacity-80 group-hover:scale-110 transition-transform" />
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h3 className="font-bold text-gray-900">{course.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">Next: <span className="text-blue-600 font-medium">{course.nextLesson}</span></p>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-3 sm:mt-0">
                      <div className="flex justify-between text-xs font-semibold text-gray-500 mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-1000" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Resume Button */}
                  <div className="flex items-center justify-center sm:justify-end">
                    <button className="w-full sm:w-auto px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-lg hover:bg-blue-600 transition-colors">
                      Resume
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: Upcoming Schedule */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Upcoming Live</h2>
            
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
                <span className="font-bold text-sm">Schedule</span>
                <Calendar size={18} className="opacity-80" />
              </div>
              <div className="divide-y divide-gray-100">
                {upcomingClasses.map((item, idx) => (
                  <div key={idx} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-[10px] uppercase">
                        {item.subject}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">{item.time}</span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-800">{item.topic}</h4>
                    <p className="text-xs text-gray-500 mt-1">by {item.tutor}</p>
                    <button className="mt-3 w-full py-1.5 text-xs font-bold text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                      Set Reminder
                    </button>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t border-gray-100 text-center">
                <button className="text-xs font-bold text-gray-500 hover:text-gray-900 flex items-center justify-center gap-1 mx-auto">
                  Full Calendar <ArrowRight size={12} />
                </button>
              </div>
            </div>

            {/* Quick Banner */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-bold text-lg mb-1">Scholarship Test</h4>
                <p className="text-xs text-purple-100 mb-3">Win up to 100% scholarship. Test is live now!</p>
                <button className="px-3 py-1.5 bg-white text-purple-600 text-xs font-bold rounded-lg shadow-sm">
                  Attempt Now
                </button>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}