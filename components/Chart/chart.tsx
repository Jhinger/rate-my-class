import BarChart from '@/components/Chart/BarChart/';
import PieChart from '@/components/Chart/PieChart/';

import type { ChartType, UntypedObject } from '@/types/'
interface IChartProps {
    type: ChartType;
    data: UntypedObject[];
    classes?: string;
}

const Chart = ({ type, data, classes }: IChartProps) => {
    return (
        <div className={`${classes} flex justify-center items-center m-4 w-1/2 h-[20rem] bg-primary rounded-md`}>
            {type==="barchart" && <BarChart label={"Highest Rated GPA Boosters"} barData={data} />}
            {type==="piechart" && <PieChart />}
        </div>
    )
}

export default Chart;   