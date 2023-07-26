import { ImageResponse } from "next/server";

// export const runtime = "edge";
export const alt =
	"RateMyClass - Students helping students round out their schedule.";
export const contentType = "image/png";

export default async function OG() {
	return new ImageResponse(<div></div>);
}
