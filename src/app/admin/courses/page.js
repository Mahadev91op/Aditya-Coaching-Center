// src/app/admin/courses/page.js
"use client";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, MoreVertical, Star, Users } from "lucide-react";

export default function AdminCourses() {
  // Dummy Data (Baad me API se aayega)
  const courses = [
    { id: 1, title: "Class 12 Physics Masterclass", category: "Class 12", price: "₹4,999", students: 2500, status: "Active" },
    { id: 2, title: "JEE Mains Mathematics", category: "JEE", price: "₹12,999", students: 1800, status: "Active" },
    { id: 3, title: "NEET Biology Crash Course", category: "NEET", price: "₹8,999", students: 4000, status: "Closed" },
    { id: 4, title: "Class 10 Science", category: "Class 10", price: "₹3,499", students: 3000, status: "Active" },
  ];

  return (
    <div className="space-y-6 pb-20 md:pb-0">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Courses</h1>
          <p className="text-slate-500 text-sm">Manage your batches and content.</p>
        </div>
        <Link href="/admin/courses/add" className="bg-blue-600 text-white text-sm font-bold px-5 py-3 rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 active:scale-95">
          <Plus size={18} /> Add New Course
        </Link>
      </div>

      {/* Search & Filter */}
      <div className="bg-white p-2 rounded-xl border border-slate-200 flex gap-2 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search courses..." 
            className="w-full pl-10 pr-4 py-2.5 bg-transparent text-sm font-medium outline-none text-slate-700 placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* --- MOBILE VIEW: CARDS (App Like) --- */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase ${
                  course.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                }`}>
                  {course.status}
                </span>
                <h3 className="font-bold text-slate-900 mt-2 text-lg leading-tight">{course.title}</h3>
                <p className="text-xs text-slate-500 font-medium">{course.category}</p>
              </div>
              <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-full">
                <MoreVertical size={18} />
              </button>
            </div>
            
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 border-t border-slate-50 pt-3">
              <div className="flex items-center gap-1">
                <Users size={14} /> {course.students}
              </div>
              <div className="flex items-center gap-1 text-slate-900 text-sm ml-auto">
                {course.price}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-1">
              <button className="flex items-center justify-center gap-2 py-2 bg-slate-50 text-slate-700 rounded-lg text-xs font-bold border border-slate-200">
                <Edit size={14} /> Edit
              </button>
              <button className="flex items-center justify-center gap-2 py-2 bg-red-50 text-red-600 rounded-lg text-xs font-bold border border-red-100">
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- DESKTOP VIEW: TABLE --- */}
      <div className="hidden md:block bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500 font-bold border-b border-slate-200">
            <tr>
              <th className="px-6 py-4">Course Name</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {courses.map((course) => (
              <tr key={course.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-bold text-slate-900 text-sm">{course.title}</p>
                  <p className="text-xs text-slate-500">{course.students} students</p>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded-md">
                    {course.category}
                  </span>
                </td>
                <td className="px-6 py-4 font-bold text-slate-700 text-sm">{course.price}</td>
                <td className="px-6 py-4">
                  <span className={`w-2 h-2 rounded-full inline-block mr-2 ${course.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="text-xs font-bold text-slate-600">{course.status}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}