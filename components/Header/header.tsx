
export interface IHeaderProps {
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
}

const Header = ({
    title = "RateMyClass",
    subtitle = "Search for your school",
    children,
    ...props
}: IHeaderProps) => {
    return (
        <div {...props}>
            { children }
        </div>
    )
}

export default Header;