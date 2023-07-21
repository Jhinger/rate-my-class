import prisma from '@/lib/prismadb';
import { getServerSession } from 'next-auth/next';
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from '../../auth/[...nextauth]/route';

interface IReportComment {
    params: {
        classId: number;
        userId: string;
        commentId: number;
    }
}

export async function POST(request: NextRequest, { params }: IReportComment) {
    const { classId, userId, commentId } = await request.json();
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Not authenticated - you must sign in to report a rating.", status: 401 })
    }

    if (userId === session.user.id) {
        return NextResponse.json({ error: "Error - you cannot report your own comment", status: 403 });
    }

    const hasAlreadyReported = await prisma.report.findFirst({
        where: {
            reporteeId: session.user.id!,
            commentId: +commentId,
        }
    })
    if (hasAlreadyReported) {
        return NextResponse.json({ error: "Error - You have already left a rating for this class", status: 403 })
    }

    await prisma.report.create({
        data: {
            classId: +classId,
            userId: userId,
            commentId: +commentId,
            reporteeId: session.user.id!
        }
    })
    return NextResponse.json({ status: 200 });
}