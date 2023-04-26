
interface IProgressBarProps {
    percent?: number;
    color?: string;
    className?: string;
}

const ProgressBar = ({ percent = 20, color = "primary", className }: IProgressBarProps) => {
    return (
        <div className={`${className} flex flex-row h-8 max-w-min justify-center items-center`}>
            <div className={`relative h-3 w-[10rem] bg-gray-500 rounded-md`} >
                <div className={`absolute top-0 left-0 h-3 rounded-md bg-primary`} style={{width: `${percent}%`}} />
            </div>
            <div className="flex justify-center items-center mx-1">
                <p className="font-bold leading-none text-xs text-primary">{percent}%</p>
            </div>
        </div>
    )
}

export default ProgressBar;