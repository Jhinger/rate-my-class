import { ChartType } from '@/types/'
interface IChartProps {
    type: ChartType;
    classes?: string;
}

const Chart = ({ type, classes }: IChartProps) => {
    return (
        <div className={`${classes}`}>
            Chart.
        </div>
    )
}

export default Chart;   