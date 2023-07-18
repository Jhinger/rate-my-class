import LoadingSpinner from "@/components/LoadingSpinner";

const ChartLoading = () => {
    return (
        <div className="w-[60rem] h-full flex justify-center items-center">
            <LoadingSpinner className="center w-10" />
        </div>
    )
}

export default ChartLoading;