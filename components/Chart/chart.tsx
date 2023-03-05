import BarChart from '@/components/Chart/BarChart/';
import PieChart from '@/components/Chart/PieChart/';

import type { ChartType, UntypedObject } from '@/types/'
interface IChartProps {
    type: ChartType;
    data: UntypedObject[];
    label: string;
    classes?: string;
}

const Chart = ({ type, data, label, classes }: IChartProps) => {
    return (
        <div className={`${classes} flex justify-center items-center m-4 w-1/2 bg-primary rounded-md`}>
            {type==="barchart" && <BarChart label={label} barData={data} />}
            {type==="piechart" && <PieChart label={label} pieData={data}/>}
        </div>
    )
}

export default Chart;   