import prisma from "@/lib/prismadb";
import type { Maybe } from "@/types";
import type { Class, Prisma } from "@prisma/client";

function isNotEmpty(value: Maybe<Class>): asserts value is NonNullable<Class> {
	if (value === undefined || value === null) {
		throw new Error("Class does not exist in Class/updateAvgBooster");
	}
}

export default async function updateAvgBooster(
	params: Prisma.MiddlewareParams,
	next: (params: Prisma.MiddlewareParams) => Promise<any>,
) {
	const result = await next(params);

	if (params.model === "Comment" && params.action === "create") {
		const classID = params.args.data.class.connect.id;
		const isBooster = params.args.data.isGPABooster ? 1 : 0;

		const userClass = await prisma.class.findFirst({
			where: {
				id: classID,
			},
		});
		isNotEmpty(userClass);

		const updatedBoosterValue =
			userClass.avgBooster! +
			(isBooster - userClass.avgBooster!) / userClass.numComments;
		console.log("Updated Booster value:", updatedBoosterValue);

		await prisma.class.update({
			where: {
				id: classID,
			},
			data: {
				avgBooster: updatedBoosterValue,
			},
		});
	}

	return result;
}
