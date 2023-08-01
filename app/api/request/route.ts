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

	let lastDay = Date.now() - (24 * 60 * 60 * 1000);
	let lastDayString = new Date(lastDay).toISOString();
	const hasAlreadyRequested = await prisma.request.findFirst({
		where: {
			userId: session.user.id!,
			dateCreated: {
				gte: lastDayString
			}
		},
		select: {
			id: true
		}
	})
	console.log(hasAlreadyRequested);
	if (hasAlreadyRequested) {
		return NextResponse.json({ error: "Sorry - You are limited to one request per day, please try again later.", status: 403 });
	}

	try {
		await prisma.request.create({
			data: {
				userId: session.user.id!,
				request: schoolRequest,
			}
		})
	} catch (err) {
		if (err instanceof Error) {
			return NextResponse.json({ error: err.message, status: 500 });
		}
		return NextResponse.json({ error: "Failed to create request.", status: 500 });
	}

	return NextResponse.json({ status: 200 });
}