"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import * as z from "zod";
import { X } from "lucide-react";
import Icon from "@/components/Icon";
import useAlert from "@/hooks/useAlert";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Dispatch, SetStateAction, useState } from "react";

import {
	NUM_TEXTAREA_ROWS,
	NUM_TEXTAREA_COLS,
	LENGTH_PRIMARY_TEXT,
	LENGTH_SECONDARY_TEXT,
	LENGTH_TEACHER_NAME,
} from "@/constants";

import { DELIVERYSchema, TAGSchema } from "@/prisma/generated/schemas/enums";
import type { Class } from "@prisma/client";
import type { ICommentFormValues } from "@/types";

interface ICommentFormProps {
	schoolName: string | null;
	schoolClass: Partial<Class> | null;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	className?: string;
}

const CommentSchema = z
	.object({
		delivery: z.lazy(() => DELIVERYSchema).default("INPERSON"),
		teacher: z
			.string()
			.min(0)
			.max(LENGTH_TEACHER_NAME, {
				message: "Must be less than 25 characters.",
			})
			.optional(),
		overallRating: z.coerce
			.number()
			.min(1)
			.max(5, { message: "Must select an Overall Rating" }),
		difficulty: z.coerce
			.number()
			.min(1)
			.max(5, { message: "Must select a Difficulty" }),
		workload: z.coerce
			.number()
			.min(1)
			.max(5, { message: "Must select an Overall Rating" }),
		gradeRecieved: z.coerce
			.number()
			.min(0)
			.max(11)
			.optional()
			.default(0)
			.nullable(),
		isRecommended: z.enum(["1", "0"]).transform((val) => val === "1"),
		isGPABooster: z.coerce.number().min(0).max(1),
		tags: z
			.lazy(() => TAGSchema)
			.array()
			.min(0)
			.max(3, { message: "Only select a max of 3 Tags." })
			.optional()
			.default([]),
		primaryText: z
			.string()
			.min(10, { message: "Must have atleast 10 characters." })
			.max(LENGTH_PRIMARY_TEXT, {
				message: "Must be less than 350 characters",
			})
			.nonempty(),
		secondaryText: z
			.string()
			.max(LENGTH_SECONDARY_TEXT, {
				message: "Must be less than 350 characters",
			})
			.optional(),
	})
	.strict();

const CommentForm = ({
	schoolName,
	schoolClass,
	setIsOpen,
	className,
}: ICommentFormProps) => {
	const [teacherCount, setTeacherCount] = useState(0);
	const [overviewCount, setOverviewCount] = useState(0);
	const [examCount, setExamCount] = useState(0);
	const { setAlert } = useAlert();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
	} = useForm<ICommentFormValues>({
		resolver: zodResolver(CommentSchema),
		mode: "all",
	});

	const onSubmit: SubmitHandler<ICommentFormValues> = async (
		form: ICommentFormValues,
	) => {
		const body = {
			Class: { connect: { id: schoolClass?.id } },
			...form,
		};
		try {
			const data = await fetch(
				`/api/${schoolName}/class/${schoolClass?.id}`,
				{
					method: "POST",
					body: JSON.stringify(body),
				},
			);

			if (data.ok) {
				const response = await data.json();
				if (
					response.status === 401 ||
					response.status === 403 ||
					response.status === 500
				) {
					setAlert(response.error, "failure");
					setIsOpen(false);
					console.log(response.error);
					return;
				}
				console.log(response);
				setAlert(
					`Thank You - Your Rating for ${schoolClass?.name} has been posted.`,
					"success",
				);
				setIsOpen(false);
			}
		} catch (e: unknown) {
			if (e instanceof Error) {
				return e.message;
			}
			return new Error("Failed to post onSubmit");
		}
	};

	return (
		<div className="relative flex h-max w-[60rem] flex-col items-center justify-center overflow-x-hidden rounded-md border-2 border-solid border-white pb-16 pt-8">
			<div className="absolute right-0 top-0 flex w-full justify-end px-4 py-2 hover:cursor-pointer">
				<div onClick={() => setIsOpen(false)}>
					<Icon
						icon={<X size={23} />}
						className="text-black duration-100 hover:text-blue-500"
					/>
				</div>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex h-max w-max flex-col flex-wrap items-center justify-center text-sm"
			>
				<div className="my-4 flex flex-col items-center justify-center">
					<label>
						Delivery: <span className="text-red-500">*</span>
					</label>
					<div className="my-2 flex flex-row">
						<div className="m-2">
							<input
								type="radio"
								id="classDeliveryInPerson"
								value="INPERSON"
								className="peer hidden"
								defaultChecked
								{...register("delivery")}
							/>
							<label
								htmlFor="classDeliveryInPerson"
								className="unselectable cursor-pointer rounded-sm bg-primary px-4 py-2 duration-100 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500"
							>
								In Person
							</label>
						</div>
						<div className="m-2">
							<input
								type="radio"
								id="classDeliveryOnline"
								value="ONLINE"
								className="peer hidden"
								{...register("delivery")}
							/>
							<label
								htmlFor="classDeliveryOnline"
								className="unselectable cursor-pointer rounded-sm bg-primary px-4 py-2 duration-100 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500"
							>
								Online
							</label>
						</div>
					</div>
				</div>

				<div className="color-blue ml-5 flex font-extralight"></div>

				<div className="relative mb-6 flex flex-col items-center justify-center">
					<label htmlFor="teacher">Teacher:</label>
					<div className="relative flex w-full justify-center">
						<i className="text-xxs text-gray-500">
							(Last name is sufficient)
						</i>
						{teacherCount !== 0 && (
							<div className="absolute right-2 text-xxxs text-red-500">
								{teacherCount}/{LENGTH_TEACHER_NAME}
							</div>
						)}
					</div>
					<input
						type="text"
						id="teacher"
						className="my-2 w-[25rem] rounded-md py-2 text-center"
						autoComplete="off"
						autoFocus
						{...register("teacher")}
						onChange={(e) => setTeacherCount(e.target.value.length)}
					/>
					{errors.teacher?.message && (
						<span className="absolute -bottom-4 text-xxs font-semibold text-red-500">
							{errors.teacher.message}
						</span>
					)}
				</div>

				<div className="mb-4 flex w-max flex-col items-center justify-center rounded-md bg-white px-20 py-5">
					<label className="mb-2 text-xs">
						Overall Rating:{" "}
						<em className="text-xxs text-gray-500">
							(1 = awful, 5 = awesome)
						</em>{" "}
						<span className="text-red-500">*</span>
					</label>
					<div className="flex flex-row-reverse gap-3">
						<input
							type="radio"
							id="overallRatingFive"
							value={5}
							className="peer/rating peer hidden"
							{...register("overallRating")}
						/>
						<label
							htmlFor="overallRatingFive"
							className="unselectable rounded-md bg-gray-300 p-4 ring-inset hover:cursor-pointer peer-checked:bg-green-500 peer-checked/rating:ring-2 peer-checked/rating:ring-green-700"
						>
							5
						</label>

						<input
							type="radio"
							id="overallRatingFour"
							value={4}
							className="peer/rating peer hidden"
							{...register("overallRating")}
						/>
						<label
							htmlFor="overallRatingFour"
							className="unselectable rounded-md bg-gray-300 p-4 ring-inset hover:cursor-pointer peer-checked:bg-green-400 peer-checked/rating:ring-2 peer-checked/rating:ring-green-600"
						>
							4
						</label>

						<input
							type="radio"
							id="overallRatingThree"
							value={3}
							className="peer/rating peer hidden"
							{...register("overallRating")}
						/>
						<label
							htmlFor="overallRatingThree"
							className="unselectable rounded-md bg-gray-300 p-4 ring-inset hover:cursor-pointer peer-checked:bg-green-300 peer-checked/rating:ring-2 peer-checked/rating:ring-green-500"
						>
							3
						</label>

						<input
							type="radio"
							id="overallRatingTwo"
							value={2}
							className="peer/rating peer hidden"
							{...register("overallRating")}
						/>
						<label
							htmlFor="overallRatingTwo"
							className="unselectable rounded-md bg-gray-300 p-4 ring-inset hover:cursor-pointer peer-checked:bg-green-200 peer-checked/rating:ring-2 peer-checked/rating:ring-green-500"
						>
							2
						</label>

						<input
							type="radio"
							id="overallRatingOne"
							value={1}
							className="peer/rating peer hidden"
							{...register("overallRating")}
						/>
						<label
							htmlFor="overallRatingOne"
							className="unselectable rounded-md bg-gray-300 p-4 ring-inset hover:cursor-pointer peer-checked:bg-green-100 peer-checked/rating:ring-2 peer-checked/rating:ring-green-500"
						>
							1
						</label>
					</div>
				</div>

				<div className="mb-4 flex w-max flex-col items-center justify-center rounded-md bg-white px-20 py-5">
					<label className="mb-2 text-xs">
						Difficulty:{" "}
						<em className="text-xxs text-gray-500">
							(1 = easy, 5 = hard)
						</em>{" "}
						<span className="text-red-500">*</span>
					</label>
					<div className="flex flex-row-reverse gap-3">
						<input
							type="radio"
							id="difficultyFive"
							value={5}
							className="peer/difficulty peer hidden"
							{...register("difficulty")}
						/>
						<label
							htmlFor="difficultyFive"
							className="unselectable rounded-md bg-gray-300 p-4 ring-inset hover:cursor-pointer peer-checked:bg-rose-500 peer-checked/difficulty:ring-2 peer-checked/difficulty:ring-rose-700"
						>
							5
						</label>

						<input
							type="radio"
							id="difficultyFour"
							value={4}
							className="peer/difficulty peer hidden"
							{...register("difficulty")}
						/>
						<label
							htmlFor="difficultyFour"
							className="unselectable rounded-md bg-gray-300 p-4 ring-inset hover:cursor-pointer peer-checked:bg-rose-400 peer-checked/difficulty:ring-2 peer-checked/difficulty:ring-rose-600"
						>
							4
						</label>

						<input
							type="radio"
							id="difficultyThree"
							value={3}
							className="peer/difficulty peer hidden"
							{...register("difficulty")}
						/>
						<label
							htmlFor="difficultyThree"
							className="unselectable rounded-md bg-gray-300 p-4 ring-inset hover:cursor-pointer peer-checked:bg-rose-300 peer-checked/difficulty:ring-2 peer-checked/difficulty:ring-rose-500"
						>
							3
						</label>

						<input
							type="radio"
							id="difficultyTwo"
							value={2}
							className="peer/difficulty peer hidden"
							{...register("difficulty")}
						/>
						<label
							htmlFor="difficultyTwo"
							className="unselectable rounded-md bg-gray-300 p-4 ring-inset hover:cursor-pointer peer-checked:bg-rose-200 peer-checked/difficulty:ring-2 peer-checked/difficulty:ring-rose-500"
						>
							2
						</label>

						<input
							type="radio"
							id="difficultyOne"
							value={1}
							className="peer/difficulty peer hidden"
							{...register("difficulty")}
						/>
						<label
							htmlFor="difficultyOne"
							className="unselectable rounded-md bg-gray-300 p-4 ring-inset hover:cursor-pointer peer-checked:bg-rose-100 peer-checked/difficulty:ring-2 peer-checked/difficulty:ring-rose-500"
						>
							1
						</label>
					</div>
					{errors.difficulty?.message && (
						<span>{errors.difficulty.message}</span>
					)}
				</div>

				<div className="mb-4 flex w-max flex-col items-center justify-center rounded-md bg-white px-20 py-5">
					<label className="mb-2 text-xs">
						Workload:{" "}
						<em className="text-xxs text-gray-500">
							(1 = light, 5 = heavy)
						</em>{" "}
						<span className="text-red-500">*</span>
					</label>
					<div className="flex flex-row-reverse gap-3">
						<input
							type="radio"
							id="workloadFive"
							value={5}
							className="peer/workload peer hidden"
							{...register("workload")}
						/>
						<label
							htmlFor="workloadFive"
							className="unselectable rounded-md bg-gray-300 p-4 ring-inset hover:cursor-pointer peer-checked:bg-sky-500 peer-checked/workload:ring-2 peer-checked/workload:ring-sky-700"
						>
							5
						</label>

						<input
							type="radio"
							id="workloadFour"
							value={4}
							className="peer/workload peer hidden"
							{...register("workload")}
						/>
						<label
							htmlFor="workloadFour"
							className="unselectable rounded-md bg-gray-300 p-4 ring-inset hover:cursor-pointer peer-checked:bg-sky-400 peer-checked/workload:ring-2 peer-checked/workload:ring-sky-600"
						>
							4
						</label>

						<input
							type="radio"
							id="workloadThree"
							value={3}
							className="peer/workload peer hidden"
							{...register("workload")}
						/>
						<label
							htmlFor="workloadThree"
							className="unselectable rounded-md bg-gray-300 p-4 ring-inset hover:cursor-pointer peer-checked:bg-sky-300 peer-checked/workload:ring-2 peer-checked/workload:ring-sky-500"
						>
							3
						</label>

						<input
							type="radio"
							id="workloadTwo"
							value={2}
							className="peer/workload peer hidden"
							{...register("workload")}
						/>
						<label
							htmlFor="workloadTwo"
							className="unselectable rounded-md bg-gray-300 p-4 ring-inset hover:cursor-pointer peer-checked:bg-sky-200 peer-checked/workload:ring-2 peer-checked/workload:ring-sky-500"
						>
							2
						</label>

						<input
							type="radio"
							id="workloadOne"
							value={1}
							className="peer/workload peer hidden"
							{...register("workload")}
						/>
						<label
							htmlFor="workloadOne"
							className="unselectable rounded-md bg-gray-300 p-4 ring-inset hover:cursor-pointer peer-checked:bg-sky-100 peer-checked/workload:ring-2 peer-checked/workload:ring-sky-500"
						>
							1
						</label>
					</div>
				</div>

				<div className="my-4 flex flex-col items-center justify-center">
					<label>Grade Recieved?</label>
					<i className="text-xxs text-gray-500">
						(Predict your grade if class is in progess)
					</i>
					<div className="my-2 flex flex-row gap-4">
						<select
							className="rounded-md bg-white px-8 py-2 focus:border-blue-500 focus:ring-blue-500"
							{...register("gradeRecieved")}
						>
							<option value="0">Unknown</option>
							<option value="11">A+</option>
							<option value="10">A</option>
							<option value="9">A-</option>
							<option value="8">B+</option>
							<option value="7">B</option>
							<option value="6">B-</option>
							<option value="5">C+</option>
							<option value="4">C</option>
							<option value="3">C-</option>
							<option value="2">D</option>
							<option value="1">F</option>
						</select>
					</div>
				</div>

				<div className="my-4 flex flex-col items-center justify-center">
					<label>
						Would you Recommend {schoolClass?.name ?? "this Class"}?{" "}
						<span className="text-red-500">*</span>
					</label>
					<div className="my-4 flex flex-row gap-4">
						<div>
							<input
								type="radio"
								id="isRecommendedYes"
								value="1"
								className="peer hidden"
								{...register("isRecommended")}
							/>
							<label
								htmlFor="isRecommendedYes"
								className="unselectable cursor-pointer rounded-sm bg-white px-8 py-2 duration-100 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500"
							>
								Yes
							</label>
						</div>
						<div>
							<input
								type="radio"
								id="isRecommendedNo"
								value="0"
								className="peer hidden"
								{...register("isRecommended")}
							/>
							<label
								htmlFor="isRecommendedNo"
								className="unselectable cursor-pointer rounded-sm bg-white px-8 py-2 duration-100 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500"
							>
								No
							</label>
						</div>
					</div>
				</div>

				<div className="my-4 flex flex-col items-center justify-center">
					<label>
						Is {schoolClass?.name ?? "this Class"} a GPA Booster?{" "}
						<span className="text-red-500">*</span>
					</label>
					<div className="my-4 flex flex-row gap-4">
						<div>
							<input
								type="radio"
								id="isGPABoosterYes"
								value="1"
								className="peer hidden"
								{...register("isGPABooster")}
							/>
							<label
								htmlFor="isGPABoosterYes"
								className="unselectable cursor-pointer rounded-sm bg-white px-8 py-2 duration-100 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500"
							>
								Yes
							</label>
						</div>
						<div>
							<input
								type="radio"
								id="isGPABoosterNo"
								value="0"
								className="peer hidden"
								{...register("isGPABooster")}
							/>
							<label
								htmlFor="isGPABoosterNo"
								className="unselectable cursor-pointer rounded-sm bg-white px-8 py-2 duration-100 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500"
							>
								No
							</label>
						</div>
					</div>
				</div>

				<div className="relative my-6 flex w-5/6 flex-col items-center justify-center">
					<label className="flex flex-col items-center justify-center">
						<span>
							Select up to <strong>3 Tags:</strong>{" "}
							<span className="text-red-500">*</span>
						</span>
					</label>
					<div className="my-4 flex w-1/2 flex-row flex-wrap items-center justify-center gap-2">
						<input
							type="checkbox"
							id="tagTestHeavy"
							value="TEST_HEAVY"
							className="peer/test hidden"
							{...register("tags")}
						/>
						<label
							htmlFor="tagTestHeavy"
							className="unselectable flex h-max w-max cursor-pointer items-center justify-center rounded-sm bg-white px-2 py-1 text-xs font-semibold duration-100 peer-checked/test:bg-primaryAccent peer-checked/test:ring-2 peer-checked/test:ring-blue-500"
						>
							Test Heavy
						</label>

						<input
							type="checkbox"
							id="tagAssignmentHeavy"
							value="ASSIGNMENT_HEAVY"
							className="peer/assign hidden"
							{...register("tags")}
						/>
						<label
							htmlFor="tagAssignmentHeavy"
							className="unselectable flex h-max w-max cursor-pointer items-center justify-center rounded-sm bg-white px-2 py-1 text-xs font-semibold duration-100 peer-checked/assign:bg-primaryAccent peer-checked/assign:ring-2 peer-checked/assign:ring-blue-500"
						>
							Assignment Heavy
						</label>

						<input
							type="checkbox"
							id="tagLectures"
							value="LECTURES_RECORDED"
							className="peer/lectures hidden"
							{...register("tags")}
						/>
						<label
							htmlFor="tagLectures"
							className="unselectable flex h-max w-max cursor-pointer items-center justify-center rounded-sm bg-white px-2 py-1 text-xs font-semibold duration-100 peer-checked/lectures:bg-primaryAccent peer-checked/lectures:ring-2 peer-checked/lectures:ring-blue-500"
						>
							Lectures Recorded
						</label>

						<input
							type="checkbox"
							id="tagRequired"
							value="REQUIRED"
							className="peer/required hidden"
							{...register("tags")}
						/>
						<label
							htmlFor="tagRequired"
							className="unselectable flex h-max w-max cursor-pointer items-center justify-center rounded-sm bg-white px-2 py-1 text-xs font-semibold duration-100 peer-checked/required:bg-primaryAccent peer-checked/required:ring-2 peer-checked/required:ring-blue-500"
						>
							Required
						</label>

						<input
							type="checkbox"
							id="tagAvoid"
							value="AVOID"
							className="peer/avoid hidden"
							{...register("tags")}
						/>
						<label
							htmlFor="tagAvoid"
							className="unselectable flex h-max w-max cursor-pointer items-center justify-center rounded-sm bg-white px-2 py-1 text-xs font-semibold duration-100 peer-checked/avoid:bg-primaryAccent peer-checked/avoid:ring-2 peer-checked/avoid:ring-blue-500"
						>
							Avoid
						</label>

						<input
							type="checkbox"
							id="tagTheory"
							value="THEORY_HEAVY"
							className="peer/theory hidden"
							{...register("tags")}
						/>
						<label
							htmlFor="tagTheory"
							className="unselectable flex h-max w-max cursor-pointer items-center justify-center rounded-sm bg-white px-2 py-1 text-xs font-semibold duration-100 peer-checked/theory:bg-primaryAccent peer-checked/theory:ring-2 peer-checked/theory:ring-blue-500"
						>
							Theory Heavy
						</label>

						<input
							type="checkbox"
							id="tagReading"
							value="READING_HEAVY"
							className="peer/reading hidden"
							{...register("tags")}
						/>
						<label
							htmlFor="tagReading"
							className="unselectable flex h-max w-max cursor-pointer items-center justify-center rounded-sm bg-white px-2 py-1 text-xs font-semibold duration-100 peer-checked/reading:bg-primaryAccent peer-checked/reading:ring-2 peer-checked/reading:ring-blue-500"
						>
							Reading Heavy
						</label>

						<input
							type="checkbox"
							id="tagGroup"
							value="GROUPWORK_HEAVY"
							className="peer/group hidden"
							{...register("tags")}
						/>
						<label
							htmlFor="tagGroup"
							className="unselectable flex h-max w-max cursor-pointer items-center justify-center rounded-sm bg-white px-2 py-1 text-xs font-semibold duration-100 peer-checked/group:bg-primaryAccent peer-checked/group:ring-2 peer-checked/group:ring-blue-500"
						>
							Groupwork Heavy
						</label>

						<input
							type="checkbox"
							id="tagParticipation"
							value="PARTICIPATION_MATTERS"
							className="peer/participation hidden"
							{...register("tags")}
						/>
						<label
							htmlFor="tagParticipation"
							className="unselectable flex h-max w-max cursor-pointer items-center justify-center rounded-sm bg-white px-2 py-1 text-xs font-semibold duration-100 peer-checked/participation:bg-primaryAccent peer-checked/participation:ring-2 peer-checked/participation:ring-blue-500"
						>
							Participation Matters
						</label>

						<input
							type="checkbox"
							id="tagScaled"
							value="GRADE_SCALED"
							className="peer/scaled hidden"
							{...register("tags")}
						/>
						<label
							htmlFor="tagScaled"
							className="unselectable flex h-max w-max cursor-pointer items-center justify-center rounded-sm bg-white px-2 py-1 text-xs font-semibold duration-100 peer-checked/scaled:bg-primaryAccent peer-checked/scaled:ring-2 peer-checked/scaled:ring-blue-500"
						>
							Grade Scaled
						</label>

						<input
							type="checkbox"
							id="tagCurved"
							value="GRADE_CURVED"
							className="peer/curved hidden"
							{...register("tags")}
						/>
						<label
							htmlFor="tagCurved"
							className="unselectable flex h-max w-max cursor-pointer items-center justify-center rounded-sm bg-white px-2 py-1 text-xs font-semibold duration-100 peer-checked/curved:bg-primaryAccent peer-checked/curved:ring-2 peer-checked/curved:ring-blue-500"
						>
							Grade Curved
						</label>

						<input
							type="checkbox"
							id="tagTough"
							value="TOUGH_GRADING"
							className="peer/tough hidden"
							{...register("tags")}
						/>
						<label
							htmlFor="tagTough"
							className="unselectable flex h-max w-max cursor-pointer items-center justify-center rounded-sm bg-white px-2 py-1 text-xs font-semibold duration-100 peer-checked/tough:bg-primaryAccent peer-checked/tough:ring-2 peer-checked/tough:ring-blue-500"
						>
							Tough Grading
						</label>

						<input
							type="checkbox"
							id="tagUseful"
							value="USEFUL"
							className="peer/useful hidden"
							{...register("tags")}
						/>
						<label
							htmlFor="tagUseful"
							className="unselectable flex h-max w-max cursor-pointer items-center justify-center rounded-sm bg-white px-2 py-1 text-xs font-semibold duration-100 peer-checked/useful:bg-primaryAccent peer-checked/useful:ring-2 peer-checked/useful:ring-blue-500"
						>
							Useful
						</label>

						<input
							type="checkbox"
							id="tagFinals"
							value="NO_FINALS"
							className="peer/finals hidden"
							{...register("tags")}
						/>
						<label
							htmlFor="tagFinals"
							className="unselectable flex h-max w-max cursor-pointer items-center justify-center rounded-sm bg-white px-2 py-1 text-xs font-semibold duration-100 peer-checked/finals:bg-primaryAccent peer-checked/finals:ring-2 peer-checked/finals:ring-blue-500"
						>
							No Finals
						</label>

						<input
							type="checkbox"
							id="tagQuizzes"
							value="QUIZZES"
							className="peer/quizzes hidden"
							{...register("tags")}
						/>
						<label
							htmlFor="tagQuizzes"
							className="unselectable flex h-max w-max cursor-pointer items-center justify-center rounded-sm bg-white px-2 py-1 text-xs font-semibold duration-100 peer-checked/quizzes:bg-primaryAccent peer-checked/quizzes:ring-2 peer-checked/quizzes:ring-blue-500"
						>
							Quizzes
						</label>

						<input
							type="checkbox"
							id="tagInteresting"
							value="INTERESTING"
							className="peer/interesting hidden"
							{...register("tags")}
						/>
						<label
							htmlFor="tagInteresting"
							className="unselectable flex h-max w-max cursor-pointer items-center justify-center rounded-sm bg-white px-2 py-1 text-xs font-semibold duration-100 peer-checked/interesting:bg-primaryAccent peer-checked/interesting:ring-2 peer-checked/interesting:ring-blue-500"
						>
							Interesting
						</label>
					</div>
					{errors.tags?.message && (
						<span className="absolute -bottom-4 text-xxs font-semibold text-red-500">
							{errors.tags.message}
						</span>
					)}
				</div>

				<div className="relative my-5 flex flex-col items-center justify-center">
					<label htmlFor="primaryText">
						General Overview:{" "}
						<span className="text-red-500">*</span>
					</label>
					<div className="relative flex w-full justify-center">
						<i className="text-xxs text-gray-500">
							(quality, pace of class, subjects to focus on,
							difficulty relative to other classes, etc.)
						</i>
						{overviewCount !== 0 && (
							<div className="absolute right-2 text-xxxs text-red-500">
								{overviewCount}/{LENGTH_PRIMARY_TEXT}
							</div>
						)}
					</div>
					<textarea
						id="primaryText"
						className="my-2 rounded-md p-8"
						placeholder="Required"
						cols={NUM_TEXTAREA_COLS}
						rows={NUM_TEXTAREA_ROWS}
						{...register("primaryText", { required: true })}
						onChange={(e) =>
							setOverviewCount(e.target.value.length)
						}
					/>
					{errors.primaryText?.message && (
						<span className="absolute -bottom-5 text-xxs font-semibold text-red-500">
							{errors.primaryText.message}
						</span>
					)}
				</div>

				<div className="relative my-5 flex flex-col items-center justify-center">
					<label htmlFor="secondaryText">Exam Tips:</label>
					<div className="relative flex w-full justify-center">
						<i className="text-xxs text-gray-500">
							(exam format, study tips, study resources to use,
							question types, etc.)
						</i>
						{examCount !== 0 && (
							<div className="absolute right-2 text-xxxs text-red-500">
								{examCount}/{LENGTH_SECONDARY_TEXT}
							</div>
						)}
					</div>
					<textarea
						id="secondaryText"
						className="my-2 rounded-md p-8"
						placeholder="Optional"
						cols={NUM_TEXTAREA_COLS}
						rows={NUM_TEXTAREA_ROWS}
						{...register("secondaryText")}
						onChange={(e) => setExamCount(e.target.value.length)}
					/>
					{errors.secondaryText?.message && (
						<span className="absolute -bottom-5 text-xxs font-semibold text-red-500">
							{errors.secondaryText.message}
						</span>
					)}
				</div>

				<div className="my-6 w-1/2 text-center text-xxs text-gray-500">
					By clicking the &quot;Submit&quot; button, I acknowledge
					that I have read and agreed to the RateMyClass{" "}
					<Link
						href={"/site-guidelines"}
						className="text-blue-400 duration-100 hover:cursor-pointer hover:text-tertiaryComplement"
					>
						Site Guidelines
					</Link>
					,
					<Link
						href={"/terms"}
						className="text-blue-400 duration-100 hover:cursor-pointer hover:text-tertiaryComplement"
					>
						{" "}
						Terms of Use
					</Link>{" "}
					and{" "}
					<Link
						href={"/privacy-policy"}
						className="text-blue-400 duration-100 hover:cursor-pointer hover:text-tertiaryComplement"
					>
						Privacy Policy
					</Link>
					. Submitted data becomes the property of RateMyClass.io
				</div>
				{!isValid && (
					<span className="text-xxs text-red-500">
						Cannot Submit - Form is missing required input(s).
					</span>
				)}
				<button
					type="submit"
					className="m-4 rounded-md bg-primaryAccent px-6 py-2 duration-75 hover:ring-2 hover:ring-inset hover:ring-blue-500 disabled:cursor-not-allowed disabled:bg-opacity-50"
					disabled={!isValid || isSubmitting}
				>
					{isSubmitting ? (
						<LoadingSpinner className="w-6" />
					) : (
						"Submit"
					)}
				</button>
			</form>
		</div>
	);
};

export default CommentForm;
