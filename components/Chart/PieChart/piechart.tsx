"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface IPieChartProps {
	pieData: number;
	label: string;
}

const data = (avgBooster: number = 0.5) => {
	return {
		labels: ["Yes", "No"],
		datasets: [
			{
				label: "Percentage",
				data: [avgBooster * 100, (1 - avgBooster) * 100],
				backgroundColor: [
					"rgba(54, 162, 235, 0.8)",
					"rgba(255, 99, 132, 0.8)",
				],
				borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
				borderWidth: 1,
			},
		],
	};
};

const options = {
	plugins: {
		datalabels: {
			formatter: (value: number) => {
				if (value < 15) return "";
				return value + "%";
			},
			anchor: "end",
			align: "end",
		},
		title: {
			display: true,
			text: `GPA Booster?`,
			color: "white",
		},
	},
};

const PieChart = ({ pieData, label }: IPieChartProps) => {
	return (
		<div className="flex h-full w-full items-center justify-center rounded-md">
			<Doughnut data={data(pieData)} options={options} />
		</div>
	);
};

export default PieChart;
