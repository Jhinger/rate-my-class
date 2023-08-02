import {
	getSchool,
	getClasses,
	getDepartments,
	getBoosters,
	getDifficultClasses,
} from "./actions";
import Chart from "@/components/Chart";
import SearchBar from "@/components/SearchBar";
import Directory from "@/components/Directory";
import EmptyState from "@/components/EmptyState";
import LoadMore from "@/components/Button/LoadMore";
import getPlaceholder from "@/util/getPlaceholder";
import { colors_blue, colors_mauve } from "@/constants/boosterColors";
import { optionsBoosters, optionsDifficulty } from "@/config/chart";
import assert from "@/util/assert";

import type { Metadata } from "next";

export async function generateMetadata({
	params,
}: {
	params: { school: string };
}): Promise<Metadata | undefined> {
	const { school } = params;

	return {
		title: `RateMyClass - ${school}`,
		description:
			"Students helping students make informed decisions regarding their class schedule.",
		openGraph: {
			title: `RateMyClass - ${school}`,
			description:
				"Students helping students make informed decisions regarding their class schedule.",
			type: "website",
			url: `${process.env.NEXTAUTH_URL}/${school}`,
		},
		twitter: {
			card: "summary_large_image",
			title: `RateMyClass - ${school}`,
			description:
				"Students helping students make informed decisions regarding their class schedule.",
		},
	};
}

export const revalidate = 3600;

export default async function SchoolPage({
	params,
}: {
	params: { school: string };
}) {
	const { school } = params;
	const _school = await getSchool(school);

	const _classesData = getClasses(_school!);
	const _departmentsData = getDepartments(_school!);
	const _boostersData = getBoosters(_school!);
	const _difficultData = getDifficultClasses(_school!);

	const [classes, departments, boosters, difficults] = await Promise.all([
		_classesData,
		_departmentsData,
		_boostersData,
		_difficultData,
	]);

	const placeholder = getPlaceholder([
		classes[0],
		classes[classes.length - 1],
	]);

	return (
		<>
			<div className="center flex max-w-[75rem] flex-col items-center justify-start">
				<div className="flex min-w-[75em] flex-col items-center justify-center">
					<h4 className="mt-8 w-full p-4 text-[2.75rem] font-extrabold tracking-tightest text-primary">
						{_school?.name} ({_school?.short})
					</h4>
					<div className="mb-4 flex min-w-max flex-row gap-4">
						<Chart
							type="barchart"
							classes="w-[36rem] h-max"
							data={boosters}
							label={"Highest Rated GPA Boosters"}
							colors={colors_blue}
							options={optionsBoosters}
						/>
						<Chart
							type="barchart"
							classes="w-[36rem] h-max"
							data={difficults}
							label={"Highest Difficulty Classes"}
							colors={colors_mauve}
							options={optionsDifficulty}
						/>
					</div>
					<h4 className="center font-base mt-4 pt-4 text-white">
						Search for a Class:
					</h4>
					<div className="mt-4 flex justify-center">
						<SearchBar
							options={classes}
							placeholder={placeholder}
							className="w-[90vw] max-w-[60rem]"
						/>
					</div>
				</div>
				<div className="mt-16 min-h-full w-11/12">
					{departments.length ? (
						<Directory summary={departments} />
					) : (
						<EmptyState
							title="Sorry, there is no data for this school yet."
							subtitle="Please check back later."
						/>
					)}
				</div>
				<div className="my-12">
					{departments.length ? <LoadMore /> : null}
				</div>
			</div>
		</>
	);
}
