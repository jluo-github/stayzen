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

export async function POST(req: NextRequest, res: NextResponse) {
  const name = `CuteCat-${Math.ceil(Math.random() * 999)}`;
  try {
    const testProfile = await db.testProfile.update({
      where: {
        id: "4d9cb566-f845-4b9b-a131-7d22fb766220",
      },
      data: {
        name,
      },
    });

    return NextResponse.json({ message: "Supabase updated successfully", testProfile });
  } catch (error) {
    console.error("Error creating Supabase record:", error);
    return NextResponse.json({ error: "Error updating Supabase record" }, { status: 500 });
  }
}
