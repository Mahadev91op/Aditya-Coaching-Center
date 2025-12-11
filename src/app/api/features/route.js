import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Feature from "@/models/Feature";

export async function GET() {
  await dbConnect();
  const features = await Feature.find({}).sort({ order: 1 });
  return NextResponse.json({ success: true, data: features });
}