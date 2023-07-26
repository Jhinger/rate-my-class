import prisma from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	return NextResponse.json({ testing: "Hello", status: 200 });
}
