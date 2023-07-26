import LoadingSpinner from "@/components/LoadingSpinner";

const ChartLoading = () => {
	return (
		<div className="flex h-full w-[60rem] items-center justify-center">
			<LoadingSpinner className="center w-10" />
		</div>
	);
};

export default ChartLoading;
