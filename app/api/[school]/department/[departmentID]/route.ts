import { NextRequest, NextResponse } from "next/server";

interface IClassProps {
	params: {
		school: string;
		departmentID: string;
	};
}

export async function POST(request: NextRequest, { params }: IClassProps) {
	const body = await request.json();
	console.log(body);
	return NextResponse.json({
		"Department-POST": `${params.school}, ${params.departmentID}`,
	});
}
