
interface IProgressBarProps {
    percent: number;
    maxPercent: number;
    color: string;
    textColor: string;
    className?: string;
}

const ProgressBar = ({ percent = 20, maxPercent = 100, color = "bg-primary", textColor, className }: IProgressBarProps) => {
    const progress = (percent / maxPercent) * 100;

    return (
        <div className={`${className} flex flex-row h-8 max-w-min justify-center items-center`}>
            <div className={`relative h-3 w-[10rem] bg-gray-500 rounded-md`} >
                <div className={`absolute top-0 left-0 h-3 rounded-md ${color}`} style={{width: `${progress}%`}} />
            </div>
            <div className="flex justify-center items-center mx-1">
                <p className={`${textColor} font-bold leading-none text-xs`}>{progress}%</p>
            </div>
        </div>
    )
}

export default ProgressBar;