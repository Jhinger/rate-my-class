import { NextRequest, NextResponse } from "next/server";

interface ISchoolProps {
    params: {
        schoolId: string;
    };
}

export async function GET(request: NextRequest, { params }: ISchoolProps) {
    const { schoolId } = params;
    console.log(schoolId);
    return NextResponse.json({ "schoolId": `${schoolId}` })
}

export async function POST(request: NextRequest) {
    return NextResponse.json({ "test": "This is a test" })
}