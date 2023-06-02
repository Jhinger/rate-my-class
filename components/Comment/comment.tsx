import getDate from '@/util/getDate';
import Icon from '@/components/Button/Icon';
import { MoreVerticalIcon } from 'lucide-react';

import type { Comment as CommentType } from '@prisma/client';

interface ICommentProps {
    comment: CommentType;
}

const Comment = ({ comment }: ICommentProps) => {
    const commentDate = getDate(comment.createdAt);

    return (
        <div className="bg-gray-200 text-black text-base font-semibold rounded-md w-[60rem] h-[25rem]">
            <div className='w-full flex relative top-4 justify-between items-center px-8'> 
                { commentDate }
                <Icon>
                    <MoreVerticalIcon size={20} />
                </Icon>
            </div>
            <div className='container for left box and right'>
                <div className='container left box'>

                </div>
                <div className='container right box'>
                    
                </div>
            </div>
        </div>
    )
}

export default Comment;