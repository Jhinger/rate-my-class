interface ITrayProps {
	isVisible: boolean;
	children: React.ReactNode;
	className?: string;
	[rest: string]: any;
}

const Tray = ({
	isVisible,
	children,
	className = "",
	...props
}: ITrayProps) => {
	return (
		<>
			{isVisible && (
				<menu
					{...props}
					className={`${className} flex h-max w-max flex-col`}
				>
					{children}
				</menu>
			)}
		</>
	);
};

export default Tray;
