// src/app/api/courses/route.js
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Course from "@/models/Course";

// 1. Saree Courses lane ke liye (GET)
export async function GET() {
  await dbConnect();
  try {
    const courses = await Course.find({}).sort({ createdAt: -1 }); // Latest pehle
    return NextResponse.json({ success: true, data: courses });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// 2. Naya Course add karne ke liye (POST) - Admin ke liye
export async function POST(req) {
  await dbConnect();
  try {
    const body = await req.json();
    const course = await Course.create(body);
    return NextResponse.json({ success: true, data: course }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}