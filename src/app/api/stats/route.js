import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Stat from "@/models/Stat";

export async function GET() {
  await dbConnect();
  const stats = await Stat.find({}).sort({ order: 1 });
  return NextResponse.json({ success: true, data: stats });
}