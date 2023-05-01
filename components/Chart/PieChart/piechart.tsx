import { Doughnut } from 'react-chartjs-2'
import { 
    Chart as ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend 
} from 'chart.js';

ChartJS.register(
    ArcElement, 
    Tooltip, 
    Legend
);

interface IPieChartProps {
    pieData: number;
    label: string;
}

const data = (avgBooster: number = 0.5) => {
    return {
        labels: ['Yes', 'No'],
        datasets: [
            {
                label: 'Percentage',
                data: [(1 - avgBooster) * 100, avgBooster * 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }
}

const options = (name: string) => {
    return {
        options: {
            plugins: {
                datalabels: {
                    formatter: (value: number) => {
                        if (value < 15) return "";
                        return value + "%";
                    }
                }
            },
            title: {
                display: true,
                text: `Is ${name} a GPA Booster?`
            }
        }
    }
}

const PieChart = ({ pieData, label }: IPieChartProps) => {
    return (
        <div className="w-full h-full flex justify-center items-center rounded-md">
            <Doughnut data={data(pieData)} options={{
                responsive: true,
                maintainAspectRatio: true,
            }} />
        </div>
    )
}

export default PieChart;