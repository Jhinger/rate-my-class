import prisma from "@/lib/prismadb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const { schoolRequest } = await request.json();
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({
			error: "Not authenticated - you must sign in to request a School/Class",
			status: 401,
		});
	}

	// Limit amount of reporting

	return NextResponse.json({ status: 200 });
}