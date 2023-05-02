import ProgressBar from "@/components/ProgressBar";

import type { Averages } from "@/types";

interface IClassSummaryProps {
    school: {
        name: string,
        short: string;
    };
    className: string;
    averages: any;
}

const ClassSummary = ({ averages, school, className }: IClassSummaryProps) => {
    return (
        <div className="flex flex-col justify-center items-start w-[30rem]">
            <h1 className="text-primary text-[2rem] tracking-tightest font-bold">{ school.name } ({school.short})</h1>
            <h2 className="text-primary text-[1.5rem] tracking-tightest font-semibold">{ className }</h2>

            <div className="my-4 flex flex-col gap-y-2">
                <ProgressBar label="Workload Hours:" percent={averages.avgWorkload} maxPercent={5} color="bg-[#4BA0EF]" textColor="text-[#4BA0EF]" />
                <ProgressBar label="Difficulty:" percent={averages.avgDifficulty} maxPercent={5} color="bg-[#EF4B4B]" textColor="text-[#EF4B4B]" />
                <ProgressBar label="Would Recommend:" percent={averages.avgRecommended} maxPercent={1} color="bg-[#76CC7E]" textColor="text-[#76CC7E]" />
                <ProgressBar label="Average Grade:" percent={averages.avgGrade} maxPercent={11} color="bg-[#9C76CC]" textColor="text-[#9C76CC]" />
            </div>

            <span className=""></span>
        </div>
    )
}

export default ClassSummary;