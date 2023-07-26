import getDate from "@/util/getDate";
import Tag from "@/components/Tag";
import ProgressBar from "@/components/ProgressBar";
import getTagName from "@/util/getTagName";
import CommentActions from "@/components/CommentActions";
import getDelivery from "@/util/getDelivery";
import { getGrade } from "@/util/getGrade";

import type { Comment as CommentType } from "@prisma/client";

interface ICommentProps {
	comment: CommentType;
}

const Comment = ({ comment }: ICommentProps) => {
	const commentDate = getDate(comment.createdAt);

	const renderTags = comment.tags.map((tag, index) => (
		<Tag className={`bg-sky-200 text-xxxs`} key={index}>
			{getTagName(tag)}
		</Tag>
	));

	return (
		<div className="flex h-[26rem] w-[65rem] flex-col rounded-md bg-gray-200 text-base font-semibold text-black">
			<div className="mt-4 flex w-full items-center justify-between px-8">
				<span>{commentDate}</span>
				<CommentActions
					classId={comment.classId}
					userId={comment.userId}
					id={comment.id}
				/>
			</div>
			<div className="relative top-2 flex h-full w-full flex-row items-center justify-center gap-6">
				<div className="flex h-[17rem] w-[13rem] flex-col items-center gap-2">
					<div className="flex h-12 w-full items-center justify-center rounded-sm bg-white text-xs font-normal">
						<ProgressBar
							className="w-11/12"
							label="Overall Rating"
							percent={comment.overallRating}
							maxPercent={5}
							textColor="#fff"
							color="bg-[#76CC7E]"
							percentSize="text-xxs"
							inRatio={true}
						/>
					</div>
					<div className="flex h-12 w-full items-center justify-center rounded-sm bg-white text-xs font-normal">
						<ProgressBar
							className="w-11/12"
							label="Difficulty"
							percent={comment.difficulty}
							maxPercent={5}
							textColor="#fff"
							color="bg-[#EF4B4B]"
							percentSize="text-xxs"
							inRatio={true}
						/>
					</div>
					<div className="flex h-12 w-full items-center justify-center rounded-sm bg-white text-xs font-normal">
						<ProgressBar
							className="w-11/12"
							label="Workload Hours"
							percent={comment.workload ?? 0}
							maxPercent={5}
							textColor="#fff"
							color="bg-[#4BA0EF]"
							percentSize="text-xxs"
							inRatio={true}
						/>
					</div>
					<div className="flex h-max w-full flex-row flex-wrap items-center justify-center gap-x-1 gap-y-1 rounded-sm bg-white px-1 py-3 font-normal">
						{renderTags}
					</div>
				</div>
				<div className="relative flex flex-col items-center">
					<div className="absolute -top-8 flex flex-row gap-x-2">
						<Tag className="bg-white">
							<div>
								<span className="font-extrabold">Prof: </span>{" "}
								{comment.teacher}
							</div>
						</Tag>
						<Tag className="bg-white">
							<div>
								<span className="font-extrabold">Grade: </span>{" "}
								{getGrade(comment.gradeRecieved ?? -1)}
							</div>
						</Tag>
						<Tag className="bg-white">
							<div>
								<span className="font-extrabold">
									{comment.isRecommended ? "" : "Not"}
								</span>{" "}
								Recommended
							</div>
						</Tag>
						<Tag className="bg-white">
							<div>
								<span className="font-extrabold">
									{comment.isGPABooster ? "" : "Not"}
								</span>{" "}
								GPA Booster
							</div>
						</Tag>
						<Tag className="bg-white">
							<div>
								<span className="font-extrabold">
									Delivery:{" "}
								</span>
								{getDelivery(comment.delivery ?? "INPERSON")}
							</div>
						</Tag>
					</div>
					<div className="flex h-[17rem] w-[45rem] items-center rounded-md bg-white">
						<div className="flex flex-col gap-8 px-12">
							<div className="flex flex-col gap-4">
								<span className="block w-full text-sm">
									Overview
								</span>
								<p className="w-full text-xs font-light leading-normal">
									{comment.primaryText}
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<span className="block w-full text-sm">
									Exam Tips
								</span>
								<p className="w-full text-xs font-light leading-normal">
									{comment.secondaryText?.length
										? comment.secondaryText
										: "-"}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Comment;
