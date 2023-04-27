
interface ICallToActionProps {
    onClick: () => unknown;
    children: React.ReactNode;
    className?: string;
}

const CallToAction = ({ onClick, children, className }: ICallToActionProps) => {
    return (
        <div onClick={onClick} className={`${className} flex flex-row text-sm justify-center items-center rounded-lg px-8 py-3 font-normal hover:bg-tertiary duration-200 cursor-pointer`}>
            { children }
        </div>
    )
}

export default CallToAction;