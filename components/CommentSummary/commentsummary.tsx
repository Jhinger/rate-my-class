import type { Comment } from "@prisma/client";

interface ICommentSummaryProps {
    details: Partial<Comment>
}

const CommentSummary = ({ details }: ICommentSummaryProps) => {
    return (
        <div>

        </div>
    )
}

export default CommentSummary;