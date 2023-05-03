import ProgressBar from "@/components/ProgressBar";
import { getNumberGrade } from '@/util/getGrade'

interface IClassSummaryProps {
    school: {
        name: string,
        short: string;
    };
    numComments: number;
    className: string;
    averages: any;
}

const ClassSummary = ({ averages, school, numComments, className }: IClassSummaryProps) => {
    return (
        <div className="flex flex-col justify-center items-start w-[30rem]">
            <h1 className="text-primary text-[2rem] tracking-tightest font-bold">{ school.name } ({school.short})</h1>
            <h2 className="text-primary text-[1.5rem] tracking-tightest font-semibold">{ className }</h2>

            <div className="mt-6 flex flex-col gap-y-2">
                <ProgressBar label="Workload Hours:" percent={averages.avgWorkload} maxPercent={5} color="bg-[#4BA0EF]" textColor="text-[#4BA0EF]" />
                <ProgressBar label="Difficulty:" percent={averages.avgDifficulty} maxPercent={5} color="bg-[#EF4B4B]" textColor="text-[#EF4B4B]" />
                <ProgressBar label="Would Recommend:" percent={averages.avgRecommended} maxPercent={1} color="bg-[#76CC7E]" textColor="text-[#76CC7E]" />
                <ProgressBar label="Average Grade:" percent={getNumberGrade(averages.avgGrade)} maxPercent={100} color="bg-[#9C76CC]" textColor="text-[#9C76CC]" />
            </div>

            <div className="font-light text-xs text-lightGray my-8">
                Based on <span className="font-semibold">{numComments} User-reported</span> ratings.
            </div>
        </div>
    )
}

export default ClassSummary;