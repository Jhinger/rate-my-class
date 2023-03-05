import { UntypedObject } from "@/types";

interface IPieChartProps {
    pieData: UntypedObject[];
    label: string;
}

const PieChart = ({ pieData, label }: IPieChartProps) => {
    return (
        <div className="w-full h-full rounded-md border-2 border-solid border-red-500">

        </div>
    )
}

export default PieChart;