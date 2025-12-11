import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Testimonial from "@/models/Testimonial";

export async function GET() {
  await dbConnect();
  const testimonials = await Testimonial.find({});
  return NextResponse.json({ success: true, data: testimonials });
}