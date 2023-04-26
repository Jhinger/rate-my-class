import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    Colors,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import type { UntypedObject } from "@/types";

interface IBarChartProps {
    barData: UntypedObject[];
    barColors: string[];
    options?: UntypedObject;
    label: string;
}

const BarChart = ({ barData, barColors, options, label }: IBarChartProps) => {
    const data = {
        labels: barData.map(data => data.name),
        datasets: [{
            label: label,
            data: barData.map(data => data.avgBooster ?? data.avgDifficulty),
            backgroundColor: barColors,
            hoverBorderColor: 'orange',
            borderColor: '#82B3FD',
            borderWidth: 2,
        }],
    }

    return (
        <div className="w-full flex justify-center items-center rounded-md border-4 border-solid border-primaryAccent">
            <Bar data={data} options={options} className="m-4" />
        </div>
    )
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Colors,
    Title,
    Tooltip,
    Legend
);

export default BarChart;