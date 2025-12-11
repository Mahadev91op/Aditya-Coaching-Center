// src/app/admin/courses/add/page.js
"use client";
import { useState } from "react";
import { ArrowLeft, Upload, Check, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddCourse() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "class12", // Default value match karni chahiye
    price: "",
    originalPrice: "",
    description: "",
    tags: "", // Comma separated lenge
    color: "blue",
    badge: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Tags ko array me convert karna
    const formattedData = {
      ...formData,
      tags: formData.tags.split(",").map(tag => tag.trim()), // "Live, Notes" -> ["Live", "Notes"]
      price: `₹${formData.price}`, // Currency symbol add karna
      originalPrice: `₹${formData.originalPrice}`
    };

    try {
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      if (res.ok) {
        alert("Course added successfully!");
        router.push("/admin/courses"); // List page par wapas bhejo
      } else {
        alert("Failed to add course");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto pb-20 md:pb-0">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/courses" className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-bold text-slate-900">Add New Course</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Basic Info */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 mb-2">Basic Details</h2>
          
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase ml-1">Course Title</label>
            <input name="title" required onChange={handleChange} type="text" placeholder="e.g. Physics Masterclass" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Category</label>
              <select name="category" onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500">
                <option value="class12">Class 12</option>
                <option value="class10">Class 10</option>
                <option value="jee">JEE / NEET</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Color Theme</label>
              <select name="color" onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500">
                <option value="blue">Blue</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
                <option value="purple">Purple</option>
                <option value="pink">Pink</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase ml-1">Tags (Comma separated)</label>
            <input name="tags" onChange={handleChange} type="text" placeholder="Live, Notes, Test Series" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500" />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase ml-1">Badge (Optional)</label>
            <input name="badge" onChange={handleChange} type="text" placeholder="e.g. Bestseller" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500" />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase ml-1">Description</label>
            <textarea name="description" onChange={handleChange} rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none" placeholder="Course details..."></textarea>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 mb-2">Pricing</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Price (₹)</label>
              <input name="price" required onChange={handleChange} type="number" placeholder="4999" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Original Price</label>
              <input name="originalPrice" onChange={handleChange} type="number" placeholder="8000" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500" />
            </div>
          </div>
        </div>

        <button disabled={loading} className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-600 transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70">
          {loading ? <Loader2 className="animate-spin" /> : <><Check size={20} /> Create Course</>}
        </button>

      </form>
    </div>
  );
}