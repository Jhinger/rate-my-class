import BarChart from '@/components/Chart/BarChart/';
import PieChart from '@/components/Chart/PieChart/';

import type { ChartType, UntypedObject } from '@/types/'

interface IChartProps {
    type: ChartType;
    label?: string;
    colors?: string[];
    data?: UntypedObject[];
    pieData?: number;
    options?: UntypedObject;
    classes?: string;
}

const Chart = ({ type, data, pieData, label, colors, options, classes }: IChartProps) => {
    return (
        <div className={`${classes} flex justify-center items-center bg-primary rounded-md`}>
            {type==="barchart" && <BarChart label={label!} barData={data!} barColors={colors!} options={options} />}
            {type==="piechart" && <PieChart label={label!} pieData={pieData!} />}
        </div>
    )
}

export default Chart;   