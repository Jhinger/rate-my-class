interface ILoadingSpinnerProps {
	className?: string;
}

const LoadingSpinner = ({ className = "" }: ILoadingSpinnerProps) => {
	return (
		<div
			className={`${className} centered border-gray aspect-square w-12 animate-spin rounded-full border-4 border-solid border-t-blue-500`}
		/>
	);
};

export default LoadingSpinner;
