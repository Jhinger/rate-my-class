import {
	findSchool,
	findClass,
	getComments,
	getGradeDistribution,
} from "./actions";

import ClassHeader from "@/components/ClassHeader";
import ClassSummary from "@/components/ClassSummary";
import ClassActions from "@/components/ClassActions";
import DisplayComments from "@/components/DisplayComments";
import Chart from "@/components/Chart";
import CommentsContainer from "@/components/CommentsContainer";
import { colors_blue } from "@/constants/boosterColors";

import type { Metadata } from "next";

export async function generateMetadata({
	params,
}: {
	params: { _class: string; school: string };
}): Promise<Metadata | undefined> {
	const { _class, school } = params;

	return {
		title: `RateMyClass - ${_class} (${school})`,
		description:
			"Students helping students make informed decisions regarding their class schedule.",
		openGraph: {
			title: `RateMyClass - ${_class} (${school})`,
			description:
				"Students helping students make informed decisions regarding their class schedule.",
			type: "website",
			url: `${process.env.NEXTAUTH_URL}/${school}/${_class}`,
		},
		twitter: {
			card: "summary_large_image",
			title: `RateMyClass - ${_class} (${school})`,
			description:
				"Students helping students make informed decisions regarding their class schedule.",
		},
	};
}

export const revalidate = 300;

export default async function ClassPage({
	params,
}: {
	params: { _class: string; school: string };
}) {
	const { school, _class } = params;

	const _school = await findSchool(school);
	const _class_ = await findClass(_school!, _class);

	const _comments = getComments(_class_!);
	const _distribution = getGradeDistribution(_class_!);

	const [comments, distribution] = await Promise.all([
		_comments,
		_distribution,
	]);

	return (
		<div>
			<ClassHeader className="flex h-full w-full justify-center pb-24 pt-12">
				<div className="relative left-12 flex h-full w-max flex-row items-start">
					<div className="relative top-2">
						<ClassSummary
							averages={_class_}
							school={{
								name: _school!.name!,
								short: _school!.short!,
							}}
							numComments={_class_!.numComments!}
							className={_class_!.name!}
						/>
						<div className="w-max">
							<ClassActions
								school={_school}
								schoolClass={_class_}
							/>
						</div>
					</div>
					<div className="flex min-w-min flex-row items-center justify-center gap-8">
						<Chart
							type="barchart"
							classes="w-[40rem] h-max"
							data={distribution}
							label={`${_class_!.name} Grade Distribution`}
							colors={colors_blue}
						/>
						<Chart
							type="piechart"
							classes="w-[24rem] relative bottom-4 bg-transparent"
							pieData={_class_?.avgBooster ?? 0}
						/>
					</div>
				</div>
			</ClassHeader>
			<CommentsContainer className="flex w-full flex-col items-center justify-center bg-secondary py-16 text-white">
				<DisplayComments
					schoolName={_school!.short!}
					_class={_class_!}
					_comments={comments}
				/>
			</CommentsContainer>
		</div>
	);
}
