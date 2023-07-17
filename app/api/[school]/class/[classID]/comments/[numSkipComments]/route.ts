import { NextRequest, NextResponse } from "next/server";

interface IClassProps {
    params: {
        school: string;
        classID: number;
        numSkipComments: number;
    }
}

export async function POST(request: NextRequest, { params }: IClassProps) {
    return NextResponse.json({ error: "Nice one", status: 401 })
}