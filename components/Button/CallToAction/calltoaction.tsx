"use client";

interface ICallToActionProps {
	onClick?: () => unknown;
	children: React.ReactNode;
	className?: string;
}

const CallToAction = ({ onClick, children, className }: ICallToActionProps) => {
	return (
		<div
			onClick={onClick}
			className={`${className} unselectable hover:shadow-buttonOrange flex cursor-pointer flex-row items-center justify-center rounded-lg px-8 py-3 text-sm font-normal duration-200 hover:bg-tertiary`}
		>
			{children}
		</div>
	);
};

export default CallToAction;
