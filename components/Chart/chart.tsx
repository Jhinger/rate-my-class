import BarChart from '@/components/Chart/BarChart/';
import PieChart from '@/components/Chart/PieChart/';
import type { ChartType } from '@/types/'
interface IChartProps {
    type: ChartType;
    classes?: string;
}

const Chart = ({ type, classes }: IChartProps) => {
    return (
        <div className={`${classes} flex justify-center items-center m-4 w-1/2 h-[20rem] bg-primary rounded-md`}>
            {type==="barchart" && <BarChart />}
            {type==="piechart" && <PieChart />}
        </div>
    )
}

export default Chart;   