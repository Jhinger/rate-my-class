import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

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
    const comment = { userId: session.user.id , ...body };
    console.log(comment);
    return NextResponse.json({ "Class-POST": `${params.school}, ${params.classID}` });
}