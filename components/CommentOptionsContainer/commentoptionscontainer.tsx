interface ICommentOptionsContainerProps {
	children: React.ReactNode;
	className?: string;
}

const CommentOptionsContainer = ({
	children,
	className,
}: ICommentOptionsContainerProps) => {
	return <div className={`${className}`}>{children}</div>;
};

export default CommentOptionsContainer;
