import db from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const property = await db.property.findFirst({
      where: { name: "Cottage in New York" },
    });

    return NextResponse.json({ message: "Supabase accessed successfully", property });
  } catch (error) {
    console.error("Error accessing Supabase:", error);
    NextResponse.error();
  }
}
