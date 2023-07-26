import prisma from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { MAX_COMMENTS } from "@/constants";

interface IUserCommentsParms {
	params: {
		userId: string;
		numSkipComments: number;
	};
}

export async function POST(
	request: NextRequest,
	{ params }: IUserCommentsParms,
) {
	const { numSkipComments, userId } = params;

	const session = await getServerSession(authOptions);
	if (!session || session.user.id !== userId) {
		return NextResponse.json({
			error: "Unauthenticated - Must sign in order to fetch comments",
			status: 401,
		});
	}

	if (session.user.id !== userId) {
		return NextResponse.json({
			error: "Forbidden - cannot fetch comments of another user.",
			status: 403,
		});
	}

	const nextComments = await prisma.comment.findMany({
		where: {
			userId: userId,
			deleted: false,
		},
		skip: +numSkipComments,
		take: MAX_COMMENTS,
		orderBy: {
			createdAt: "desc",
		},
	});

	if (!nextComments.length) {
		return NextResponse.json({
			error: "No more ratings to fetch.",
			status: 204,
		});
	}

	return NextResponse.json({ comments: nextComments, status: 200 });
}
