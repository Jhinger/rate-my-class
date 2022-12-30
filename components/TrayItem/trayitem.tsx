
interface ITrayItem {
    children: React.ReactNode;
}

const TrayItem = ({ children }: ITrayItem) => {
    return (
        <div>
            { children }
        </div>
    )
}

export default TrayItem;