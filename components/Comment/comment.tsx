import getDate from '@/util/getDate';
import Icon from '@/components/Button/Icon';
import Tag from '@/components/Tag';
import getTagName from '@/util/getTagName';
import { MoreVerticalIcon } from 'lucide-react';

import type { Comment as CommentType } from '@prisma/client';
import getDelivery from '@/util/getDelivery';
import { getGrade } from '@/util/getGrade';

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
                    <div className='flex flex-row absolute -top-8'> 
                        <Tag className='bg-white mx-2'>
                            <div>
                                <span className='font-extrabold'>Prof: </span> { comment.teacher }
                            </div>
                        </Tag>
                        <Tag className='bg-white mx-2'>
                            <div>
                                <span className='font-extrabold'>Grade Recieved: </span> { getGrade(comment.gradeRecieved ?? -1) }
                            </div>
                        </Tag>
                        <Tag className='bg-white mx-2'>
                            <div>
                                <span className='font-extrabold'>{ comment.isRecommended ? "" : "Not" }</span> Recommended
                            </div>
                        </Tag>
                        <Tag className='bg-white mx-2'>
                            <div>
                                <span className='font-extrabold'>{ comment.isGPABooster ? "" : "Not" }</span> GPA Booster
                            </div>
                        </Tag>
                        <Tag className='bg-white mx-2'>
                            { getDelivery(comment.delivery ?? "INPERSON") }
                        </Tag>
                    </div>
                    <div className='w-[45rem] h-[17rem] bg-white rounded-md flex items-center'>
                        <div className='flex flex-col gap-10 px-12'>
                            <div className='flex flex-col gap-4'>
                                <span className='block w-full text-sm'>Overview</span>
                                <p className='w-full text-xs font-light'>{ comment.primaryText }</p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <span className='block w-full text-sm'>Exam Tips</span>
                                <p className='w-full text-xs font-light'>{ comment.secondaryText }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;