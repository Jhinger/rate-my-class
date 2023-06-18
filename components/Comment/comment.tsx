import getDate from '@/util/getDate';
import Icon from '@/components/Button/Icon';
import Tag from '@/components/Tag';
import ProgressBar from '@/components/ProgressBar';
import getTagName from '@/util/getTagName';
import { MoreVerticalIcon } from 'lucide-react';
import getDelivery from '@/util/getDelivery';
import { getGrade } from '@/util/getGrade';
import { tagColors } from '@/constants/tagColors';

import type { Comment as CommentType } from '@prisma/client';

interface ICommentProps {
    comment: CommentType;
}

const Comment = ({ comment }: ICommentProps) => {
    const commentDate = getDate(comment.createdAt);

    const renderTags = comment.tags.map((tag, index) =>
        <div key={index}>
            <Tag className="bg-blue-300 text-xxs">
                { getTagName(tag) }
            </Tag>
        </div>
    )

    return (
        <div className="bg-gray-200 text-black flex flex-col text-base font-semibold rounded-md w-[65rem] h-[26rem]">
            <div className='w-full flex mt-4 justify-between items-center px-8'> 
                <span>{ commentDate }</span>
                <Icon>
                    <MoreVerticalIcon size={20} />
                </Icon>
            </div>
            <div className='w-full h-full flex flex-row justify-center items-center gap-6 relative top-2'>
                <div className='w-[13rem] h-[17rem] flex flex-col items-center gap-4'>
                    <div className='w-full flex justify-center items-center text-xs font-normal h-12 bg-white rounded-sm'>
                        <ProgressBar className='w-11/12' label="Overall Rating" percent={comment.overallRating} maxPercent={5} textColor="#fff" color="bg-[#76CC7E]" percentSize='text-xxs' inRatio={true} />
                    </div>
                    <div className='w-full flex justify-center items-center text-xs font-normal h-12 bg-white rounded-sm'>
                        <ProgressBar className='w-11/12' label="Difficulty" percent={comment.difficulty} maxPercent={5} textColor="#fff" color="bg-[#EF4B4B]" percentSize='text-xxs' inRatio={true}/>
                    </div>
                    <div className='w-full flex justify-center items-center text-xs font-normal h-12 bg-white rounded-sm'>
                        <ProgressBar className='w-11/12' label="Workload Hours" percent={comment.workload ?? 0} maxPercent={5} textColor="#fff" color="bg-[#4BA0EF]" percentSize='text-xxs' inRatio={true}/>
                    </div>
                    <div className='w-full flex gap-x-1 flex-wrap justify-center items-center font-normal h-24 bg-white rounded-sm'>
                        { renderTags }
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
                            <div>
                                <span className='font-extrabold'>Delivery: </span>{ getDelivery(comment.delivery ?? "INPERSON") }
                            </div>
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