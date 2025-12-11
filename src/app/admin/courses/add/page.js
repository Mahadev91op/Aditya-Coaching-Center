// src/app/admin/courses/add/page.js
"use client";
import { useState } from "react";
import { ArrowLeft, Upload, Check } from "lucide-react";
import Link from "next/link";

export default function AddCourse() {
  const [formData, setFormData] = useState({
    title: "",
    category: "Class 12",
    price: "",
    originalPrice: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <div className="max-w-2xl mx-auto pb-20 md:pb-0">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/courses" className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-bold text-slate-900">Add New Course</h1>
      </div>

      <form className="space-y-6">
        
        {/* Basic Info Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 mb-2">Basic Details</h2>
          
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase ml-1">Course Title</label>
            <input 
              name="title" 
              type="text" 
              placeholder="e.g. Physics Masterclass" 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Category</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500">
                <option>Class 12</option>
                <option>Class 11</option>
                <option>JEE Mains</option>
                <option>NEET</option>
                <option>Foundation</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Status</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500">
                <option>Active</option>
                <option>Draft</option>
                <option>Closed</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase ml-1">Description</label>
            <textarea 
              rows="4" 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none placeholder:text-slate-400"
              placeholder="What will students learn?"
            ></textarea>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 mb-2">Pricing</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Price (₹)</label>
              <input type="number" placeholder="4999" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Original Price</label>
              <input type="number" placeholder="8000" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500" />
            </div>
          </div>
        </div>

        {/* Image Upload (Visual Only) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 mb-2">Thumbnail</h2>
          <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer group">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-full mb-3 group-hover:scale-110 transition-transform">
              <Upload size={24} />
            </div>
            <p className="text-sm font-bold text-slate-600">Click to upload image</p>
            <p className="text-xs text-slate-400">PNG, JPG up to 5MB</p>
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-600 transition-all active:scale-95 flex items-center justify-center gap-2">
          <Check size={20} /> Create Course
        </button>

      </form>
    </div>
  );
}