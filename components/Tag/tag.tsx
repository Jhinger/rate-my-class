interface ITagProps {
	className: string;
	children: React.ReactNode;
	[rest: string]: any;
}

const Tag = ({ className, children, ...props }: ITagProps) => {
	return (
		<div
			{...props}
			className={`${className} flex h-max w-max items-center justify-center rounded-sm px-2 py-1 text-xs font-semibold`}
		>
			{children}
		</div>
	);
};

export default Tag;
