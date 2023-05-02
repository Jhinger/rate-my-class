
interface IProgressBarProps {
    percent: number;
    maxPercent: number;
    color: string;
    textColor: string;
    label?: string;
    className?: string;
}

const ProgressBar = ({ percent = 0, maxPercent = 100, color = "bg-primary", textColor, label, className }: IProgressBarProps) => {
    const progress = (percent / maxPercent) * 100;

    return (
        <div className={`${className} flex flex-col justify-start h-8`}>
            <span className={`${textColor} font-medium text-xxs w-max`}>{ label }</span>
            <div className="flex flex-row max-w-min justify-center items-center">
                <div className={`relative h-[0.6rem] w-[14rem] bg-lightGray rounded-md`} >
                    <div className={`absolute top-0 left-0 h-[0.6rem] rounded-md ${color}`} style={{width: `${progress}%`}} />
                </div>
                <div className="flex justify-center items-center mx-1">
                    <p className={`${textColor} font-bold leading-none text-xs`}>{progress.toFixed(1)}%</p>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;