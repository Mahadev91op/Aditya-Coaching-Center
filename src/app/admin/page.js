// src/app/admin/page.js
import { Users, BookOpen, DollarSign, Activity } from "lucide-react";

export default function AdminDashboard() {
  // Dummy Data (Baad me database se aayega)
  const stats = [
    { label: "Total Students", value: "1,240", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Active Courses", value: "8", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Total Revenue", value: "₹4.2L", icon: DollarSign, color: "text-green-600", bg: "bg-green-50" },
    { label: "Site Visits", value: "12k", icon: Activity, color: "text-orange-600", bg: "bg-orange-50" },
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Overview</h1>
          <p className="text-slate-500 text-sm">Welcome back, Admin.</p>
        </div>
        <button className="bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-slate-800 transition-all">
          Generate Report
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-32 md:h-auto">
            <div className="flex justify-between items-start">
              <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                <stat.icon size={18} />
              </div>
              <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+2.4%</span>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">{stat.value}</h3>
              <p className="text-xs font-semibold text-slate-400">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity (Placeholder) */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Registrations</h3>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center justify-between border-b border-slate-50 last:border-0 pb-3 last:pb-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm">
                  U{item}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Student Name {item}</p>
                  <p className="text-xs text-slate-400">Class 12 • Science</p>
                </div>
              </div>
              <span className="text-xs font-bold text-slate-400">2 min ago</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}