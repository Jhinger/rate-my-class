import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
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
    label: string;
}

const BarChart = ({ barData, label }: IBarChartProps) => {
    const data = {
        labels: barData.map(data => data.name),
        datasets: [{
            label: label,
            data: barData.map(data => data.boost_average),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
              borderWidth: 1
        }]
    }

    return (
        <div className="w-full h-full rounded-md border-2 border-solid border-red-500">
            <Bar data={data} />
        </div>
    )
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default BarChart;