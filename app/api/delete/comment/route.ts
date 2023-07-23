import prisma from '@/lib/prismadb';
import { getServerSession } from 'next-auth/next';
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from '../../auth/[...nextauth]/route';

export async function POST(request: NextRequest) {
    const { classId, userId, commentId } = await request.json();
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Not authenticated - you must sign in to delete a rating.", status: 401 })
    }

    if (userId !== session.user.id) {
        return NextResponse.json({ error: "Forbidden - You are only allowed to delete your own comments.", status: 403 });
    }

    const hasAlreadyDeleted = await prisma.comment.findFirst({
        where: {
            classId: +classId,
            id: +commentId,
            deleted: true
        }
    })
    
    if (hasAlreadyDeleted) {
        return NextResponse.json({ error: "Error - You have already deleted this rating.", status: 403 })
    }

    try {
        await prisma.comment.update({
            where: {
                id: +commentId
            },
            data: {
                deleted: true
            }
        })
    } catch (err) {
        return NextResponse.json({ error: "Server Error - Failed to delete rating.", status: 500 });
    }

    return NextResponse.json({ status: 200 });
}