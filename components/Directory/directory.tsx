import { getGrade } from "@/util/getGrade";
import type { Department } from "@prisma/client";

interface IDirectoryProps {
	summary: Partial<Department>[];
}

const Directory = ({ summary }: IDirectoryProps) => {
	const renderPanels = summary.map((department, index) => (
		<div
			key={index}
			className="m-5 flex w-full flex-row items-center justify-between rounded-md bg-primary p-4 ring-2 ring-primary ring-offset-2 ring-offset-secondary hover:ring-tertiary hover:duration-150"
		>
			<span className="ml-8 font-extrabold">{department.name}</span>
			<div className="mr-16 flex w-[8rem] flex-row justify-between">
				<span>
					{getGrade(Math.ceil(department.avgGrade || 0)) ?? "-"}
				</span>
				<span>{department.numComments ?? "-"}</span>
			</div>
		</div>
	));

	return (
		<div className="flex flex-col items-center justify-start">
			<div className="flex w-full flex-row justify-between font-inter text-xs font-light text-white">
				<div className="relative left-10">
					<em>Department:</em>
				</div>
				<div className="relative right-16 flex flex-row gap-12">
					<em>Avg Grade:</em>
					<em># Ratings:</em>
				</div>
			</div>
			{renderPanels}
		</div>
	);
};

export default Directory;
