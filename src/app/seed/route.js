import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import Course from "@/models/Course";
import Stat from "@/models/Stat";
import Feature from "@/models/Feature";
import Testimonial from "@/models/Testimonial";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    await dbConnect();

    // Clear old data
    await Promise.all([
      User.deleteMany({}),
      Course.deleteMany({}),
      Stat.deleteMany({}),
      Feature.deleteMany({}),
      Testimonial.deleteMany({})
    ]);

    const hashedPassword = await bcrypt.hash("password123", 10);

    // 1. Users
    await User.create([
      { name: "Aditya Admin", email: "admin@example.com", password: hashedPassword, role: "admin" },
      { name: "Rahul Student", email: "student@example.com", password: hashedPassword, role: "student" },
    ]);

    // 2. Stats
    await Stat.create([
      { order: 1, label: "Happy Students", value: "5000", suffix: "+", icon: "Users", gradient: "from-blue-500 to-cyan-500", desc: "Enrolled in Batches" },
      { order: 2, label: "Selection Rate", value: "95", suffix: "%", icon: "TrendingUp", gradient: "from-green-500 to-emerald-500", desc: "Cleared JEE/NEET" },
      { order: 3, label: "Video Lectures", value: "1200", suffix: "+", icon: "Video", gradient: "from-purple-500 to-pink-500", desc: "High Quality Content" },
      { order: 4, label: "Top Ratings", value: "4.9", suffix: "/5", icon: "Star", gradient: "from-orange-400 to-red-500", desc: "Rated by Students" },
    ]);

    // 3. Features
    await Feature.create([
      { order: 1, title: "Live Classes", desc: "2-way interactive classes.", icon: "Video", colSpan: "col-span-2 md:col-span-2", bg: "bg-gradient-to-r from-blue-500 to-indigo-600", text: "text-white" },
      { order: 2, title: "Mentorship", desc: "1-on-1 Guide.", icon: "Users", colSpan: "col-span-1 md:col-span-1", bg: "bg-white", text: "text-gray-900" },
      { order: 3, title: "Analytics", desc: "Track Progress.", icon: "BarChart3", colSpan: "col-span-1 md:col-span-1", bg: "bg-white", text: "text-gray-900" },
      { order: 4, title: "Full Syllabus", desc: "Exam pattern covered.", icon: "Target", colSpan: "col-span-2 md:col-span-2", bg: "bg-gradient-to-r from-orange-400 to-pink-500", text: "text-white" },
    ]);

    // 4. Testimonials
    await Testimonial.create([
      { name: "Rahul Sharma", role: "Class 12 Sc.", result: "96% Boards", content: "Physics concepts ab clear hain!", color: "blue" },
      { name: "Priya Verma", role: "NEET Aspirant", result: "AIR 4500", content: "Test series ne bahut help ki.", color: "pink" },
      { name: "Amit Gupta", role: "Class 10", result: "98% Maths", content: "Foundation batch is the best.", color: "green" },
    ]);

    // 5. Courses (Jo pehle tha wahi)
    await Course.create([
        {
            title: "Class 12 Physics Masterclass",
            category: "class12",
            price: "₹4,999",
            originalPrice: "₹8,000",
            rating: 4.9,
            students: "2.5k",
            tags: ["Live Classes", "PDF Notes"],
            color: "blue",
            badge: "Bestseller",
            description: "Complete Physics syllabus coverage.",
        },
        // ... baki courses aap add kar sakte hain
    ]);

    return NextResponse.json({ message: "Full Database Seeded Successfully!" });

  } catch (error) {
    return NextResponse.json({ message: "Error", error: error.message }, { status: 500 });
  }
}