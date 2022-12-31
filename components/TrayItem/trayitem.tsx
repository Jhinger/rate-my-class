
interface ITrayItem {
    children: React.ReactNode;
    onClick?: () => unknown;
    className?: string;
}

const TrayItem = ({ className, onClick, children }: ITrayItem) => {
    return (
        <div onClick={onClick} className={`${className} rounded-md flex items-center justify-center cursor-pointer`}>
            { children }
        </div>
    )
}

export default TrayItem;