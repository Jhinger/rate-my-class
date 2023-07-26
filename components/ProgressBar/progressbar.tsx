interface IProgressBarProps {
	percent: number;
	maxPercent: number;
	color: string;
	textColor: string;
	label?: string;
	className?: string;
	percentSize?: string;
	inRatio?: boolean;
}

const ProgressBar = ({
	percent = 0,
	maxPercent = 100,
	color = "bg-primary",
	textColor,
	label,
	percentSize,
	inRatio,
	className,
}: IProgressBarProps) => {
	const progress = (percent / maxPercent) * 100;

	return (
		<div className={`${className} flex h-8 flex-col justify-start`}>
			<span className={`${textColor} w-max text-xxs font-medium`}>
				{label}
			</span>
			<div className="flex max-w-min flex-row items-center justify-center">
				<div
					className={`relative h-[0.6rem] w-[14rem] rounded-md bg-lightGray`}
				>
					<div
						className={`absolute left-0 top-0 h-[0.6rem] rounded-md ${color}`}
						style={{ width: `${progress}%` }}
					/>
				</div>
				<div className="mx-1 flex items-center justify-center">
					<p
						className={`${textColor} text-xs font-bold leading-none ${percentSize}`}
					>
						{inRatio ? (
							<>
								{percent}/{maxPercent}
							</>
						) : (
							<>{progress.toFixed(1)}%</>
						)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProgressBar;
