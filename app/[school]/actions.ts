import { cache } from "react";
import { notFound } from "next/navigation";
import type { School, Class, Department } from "@prisma/client";
import {
	MAX_BOOSTER_CLASSES,
	MAX_DEPARTMENTS,
	MAX_DIFFICULTY_CLASSES,
} from "@/constants";
import prisma from "@/lib/prismadb";

const getSchool = cache(async (short: string): Promise<Partial<School> | null> => {
	const school = await prisma.school.findFirst({
		where: {
			short: short,
		},
	});

	return school ?? notFound();
})

const getClasses = cache(async (school: Partial<School>): Promise<Partial<Class>[]> => {
	const classes = await prisma.class.findMany({
		where: {
			schoolId: school.id,
		},
		select: {
			name: true,
		},
	});

	return classes;
})

const getDepartments = cache(async (
	school: Partial<School>,
): Promise<Partial<Department>[]> => {
	const departments = await prisma.department.findMany({
		where: {
			schoolId: school!.id,
		},
		select: {
			name: true,
			avgGrade: true,
			numComments: true,
		},
		orderBy: {
			numComments: "desc",
		},
		take: MAX_DEPARTMENTS,
	});

	return departments;
})

const getBoosters = cache(async (school: Partial<School>): Promise<Partial<Class>[]> => {
	const boosters = await prisma.class.findMany({
		where: {
			schoolId: school!.id,
		},
		orderBy: {
			avgBooster: "desc",
		},
		select: {
			name: true,
			avgBooster: true,
		},
		take: MAX_BOOSTER_CLASSES,
	});

	return boosters.map(({ avgBooster, ...rest }) => ({
		value: avgBooster,
		...rest,
	}));
})

const getDifficultClasses = cache(async (
	school: Partial<School>,
): Promise<Partial<Class>[]> => {
	const difficult = await prisma.class.findMany({
		where: {
			schoolId: school!.id,
		},
		orderBy: {
			avgDifficulty: "desc",
		},
		select: {
			name: true,
			avgDifficulty: true,
		},
		take: MAX_DIFFICULTY_CLASSES,
	});

	return difficult.map(({ avgDifficulty, ...rest }) => ({
		value: avgDifficulty,
		...rest,
	}));
})

export {
	getSchool,
	getClasses,
	getDepartments,
	getBoosters,
	getDifficultClasses,
};
