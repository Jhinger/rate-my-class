interface ITrayItem {
	children: React.ReactNode;
	onClick?: () => unknown;
	className?: string;
}

const TrayItem = ({ className, onClick, children }: ITrayItem) => {
	return (
		<div
			onClick={onClick}
			className={`${className} flex cursor-pointer items-center justify-center rounded-md`}
		>
			{children}
		</div>
	);
};

export default TrayItem;
