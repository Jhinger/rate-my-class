import { ChartType } from '@/types/'
interface IChartProps {
    type: ChartType;
    classes?: string;
}

const Chart = ({ type, classes }: IChartProps) => {
    return (
        <div className={`${classes} m-4 w-1/2 h-[20rem] bg-primary rounded-md`}>
            
        </div>
    )
}

export default Chart;   