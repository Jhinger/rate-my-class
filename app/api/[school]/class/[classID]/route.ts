import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from '@/lib/prismadb';
import { revalidatePath } from "next/cache";

interface IClassProps {
    params: {
        school: string;
        classID: string;
    }
}

export async function POST(request: NextRequest, { params }: IClassProps) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Not authenticated", status: 401 })
    }

    const body = await request.json();
    const comment = { User: { connect: { id: session.user.id } } , ...body };

    const res = await prisma.comment.create({
        data: {
            ...comment
        }
    })
    // revalidatePath('/');

    return NextResponse.json({ "Class-POST": "Hello" });
}