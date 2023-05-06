
interface ILoadingSpinnerProps {
    className?: string;
}

const LoadingSpinner = ({ className = "" }: ILoadingSpinnerProps) => {
    return (
        <div 
            className={`${className} centered animate-spin w-12 aspect-square rounded-full border-4 border-solid border-gray border-t-blue-500`}
        />
    )
}

export default LoadingSpinner;