import getDate from '@/util/getDate';
import Icon from '@/components/Button/Icon';
import Tag from '@/components/Tag';
import getTagName from '@/util/getTagName';
import { MoreVerticalIcon } from 'lucide-react';

import type { Comment as CommentType } from '@prisma/client';

interface ICommentProps {
    comment: CommentType;
}

const Comment = ({ comment }: ICommentProps) => {
    const commentDate = getDate(comment.createdAt);

    const renderTags = comment.tags.map((tag, index) =>
        <div key={index}>
            <Tag className='bg-white mx-2'>
                { getTagName(tag) }
            </Tag>
        </div>
    )

    return (
        <div className="bg-gray-200 text-black flex flex-col text-base font-semibold rounded-md w-[60rem] h-[25rem]">
            <div className='w-full flex mt-4 justify-between items-center px-8'> 
                { commentDate }
                <Icon>
                    <MoreVerticalIcon size={20} />
                </Icon>
            </div>
            <div className='w-full h-full border-2 border-solid border-red-500'>
                <div className='container left box'>

                </div>
                <div className='container right box'>
                    <div className='flex flex-row'> { renderTags } </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;