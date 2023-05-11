import type { Comment as CommentType } from '@prisma/client';

interface ICommentProps {
    comment: CommentType;
}

const Comment = ({ comment }: ICommentProps) => {
    return (
        <div className="bg-primary rounded-md w-[50rem] h-[22rem]">

        </div>
    )
}

export default Comment;