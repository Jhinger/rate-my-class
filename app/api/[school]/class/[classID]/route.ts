import { NextRequest, NextResponse } from "next/server";

interface IClassProps {
    params: {
        school: string;
        classID: string;
    }
}

export async function POST(request: NextRequest, { params }: IClassProps) {
    const body = await request.json();
    console.log(body);
    return NextResponse.json({ "Class-POST": `${params.school}, ${params.classID}` });
}