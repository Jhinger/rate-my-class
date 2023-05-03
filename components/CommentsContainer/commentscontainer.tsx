
interface ICommentsContainer {
    children: React.ReactNode;
    className?: string;
}

const CommentsContainer = ({ children, className }: ICommentsContainer) => {
    return (
        <div className={`${className}`}>
            { children }
        </div>
    )
}

export default CommentsContainer;