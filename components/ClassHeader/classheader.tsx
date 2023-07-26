interface IClassHeaderProps {
	children: React.ReactNode;
	className?: string;
}

const ClassHeader = ({ children, className }: IClassHeaderProps) => {
	return <div className={`${className}`}>{children}</div>;
};

export default ClassHeader;
