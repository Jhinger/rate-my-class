import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from '@/lib/prismadb';

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

    let userClass, userDepartment;
    try {
        userClass = await prisma.class.findFirst({
            where: {
                id: +params.classID,
            },
            select: {
                avgDifficulty: true,
                avgGrade: true,
                numComments: true,
                avgBooster: true,
                departmentId: true,
                avgWorkload  : true,
                avgRecommended: true
            }
        });

        userDepartment = await prisma.department.findFirst({
            where: {
                id: userClass!.departmentId
            },
            select: {
                id: true,
                avgGrade: true,
                numComments: true,
            }
        })
    } catch (err) {
        return NextResponse.json({ error: "Server Error -  Could not find class and/or department", status: 500 });
    }

    const newDepartmentAvg = ((userDepartment!.avgGrade * userDepartment!.numComments) + body.gradeRecieved) / (userDepartment!.numComments + 1);
    const newDepartmentNumComments = userDepartment!.numComments + 1;

    try {
        await prisma.department.update({
            where: {
                id: userDepartment!.id
            },
            data: {
                avgGrade: newDepartmentAvg,
                numComments: newDepartmentNumComments
            }
        })
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json({ error: err.message, status: 500 });
        }
    }

    try {
        await prisma.comment.create({
            data: {
                ...comment
            }
        })
    } catch (err) {
        return NextResponse.json({ error: "Server Error - Failed to post rating.", status: 500 })
    }

    return NextResponse.json({ status: 200 });
}