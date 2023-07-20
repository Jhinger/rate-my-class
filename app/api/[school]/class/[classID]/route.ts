import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from '@/lib/prismadb';
import { revalidatePath } from "next/cache";

interface IClassProps {
    params: {
        school: string;
        classID: number;
    }
}

export async function POST(request: NextRequest, { params }: IClassProps) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Not authenticated - you must sign in to post a rating.", status: 401 })
    }

    const body = await request.json();

    const userHasCommented = await prisma.comment.findFirst({
        where: {
            classId: +params.classID,
            userId: session.user.id!
        }
    });
    if (userHasCommented && session.user.role === 'USER') {
        return NextResponse.json({ error: "Forbidden - You have already left a rating for this class.", status: 403 })
    }

    const comment = { User: { connect: { id: session.user.id } } , ...body };

    const res = await prisma.comment.create({
        data: {
            ...comment
        }
    })
    revalidatePath(request.nextUrl.searchParams.get('path') || '/');

    return NextResponse.json({ "Class-POST": "Hello" });
}