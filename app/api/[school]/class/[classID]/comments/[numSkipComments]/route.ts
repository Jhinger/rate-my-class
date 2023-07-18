import prisma from '@/lib/prismadb';
import { MAX_COMMENTS } from '@/constants';
import { NextRequest, NextResponse } from "next/server";

interface IClassProps {
    params: {
        school: string;
        classID: number;
        numSkipComments: number;
    }
}

export async function POST(request: NextRequest, { params }: IClassProps) {
    const nextComments = await prisma.comment.findMany({
        where: {
            classId: +params.classID,
            deleted: false
        },
        skip: +params.numSkipComments,
        take: MAX_COMMENTS,
        orderBy: {
            createdAt: 'desc'
        }
    })

    if (!nextComments.length) {
        return NextResponse.json({error: "No more ratings to fetch.", status: 204});
    }

    return NextResponse.json({ comments: nextComments, status: 200})
}