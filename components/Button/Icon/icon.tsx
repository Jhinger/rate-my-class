
interface IIconProps {
    children: React.ReactNode;
}

const Icon = ({ children }: IIconProps) => {
    return (
        <div>
            { children }
        </div>
    )
}

export default Icon;