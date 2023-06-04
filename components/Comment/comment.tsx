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
        <div className="bg-gray-200 text-black flex flex-col text-base font-semibold rounded-md w-[65rem] h-[26rem]">
            <div className='w-full flex mt-4 justify-between items-center px-8'> 
                { commentDate }
                <Icon>
                    <MoreVerticalIcon size={20} />
                </Icon>
            </div>
            <div className='w-full h-full flex flex-row justify-center items-center gap-6 relative top-2'>
                <div className='w-[13rem] h-[17rem] flex flex-col items-center gap-4'>
                    <div className='w-full text-xs font-normal h-12 bg-white rounded-sm'>
                        Overall Rating
                    </div>
                    <div className='w-full text-xs font-normal h-12 bg-white rounded-sm'>
                        Difficulty
                    </div>
                    <div className='w-full text-xs font-normal h-12 bg-white rounded-sm'>
                        Workload Hours
                    </div>
                    <div className='w-full text-xs font-normal h-24 bg-white rounded-sm'>
                        Tags
                    </div>
                </div>
                <div className='flex flex-col items-center relative'>
                    <div className='flex flex-row absolute -top-8'> { renderTags } </div>
                    <div className='w-[45rem] h-[17rem] bg-white rounded-md'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;