import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    return NextResponse.json({ "test": "This is a test" })
}

export async function POST(request: NextRequest) {
    return NextResponse.json({ "test": "This is a test" })
}