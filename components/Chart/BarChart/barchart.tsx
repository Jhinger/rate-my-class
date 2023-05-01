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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Colors,
    Title,
    Tooltip,
    Legend
);

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
            data: barData.map(data => data.value),
            backgroundColor: barColors,
            hoverBorderColor: 'orange',
            borderColor: '#82B3FD',
            borderWidth: 2,
        }],
    }

    return (
        <div className="w-full h-max flex justify-center items-center rounded-md border-4 border-solid border-primaryAccent">
            <Bar data={data} options={options} className="m-4" />
        </div>
    )
}

export default BarChart;