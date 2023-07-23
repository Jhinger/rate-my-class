"use client";

import { useState } from 'react';
import LoadMore from '@/components/Button/LoadMore';
import Comment from '@/components/Comment';
import useAlert from '@/hooks/useAlert';
import LoadingSpinner from '@/components/LoadingSpinner';
import CommentOptionsContainer from '@/components/CommentOptionsContainer';
import CallToAction from '@/components/Button/CallToAction';
import { MAX_COMMENTS } from '@/constants';

import type { Class, Comment as CommentType } from "@prisma/client";

interface IDisplayCommentsProps {
    schoolName: string;
    _class: Partial<Class>;
    _comments: CommentType[];
}

export default function DisplayComments({ schoolName, _class, _comments }: IDisplayCommentsProps) {
    const { setAlert } = useAlert();
    const [comments, setComments] = useState(_comments);
    const [hasMoreComments, setHasMoreComments] = useState(_comments.length === MAX_COMMENTS);
    const [isLoading, setIsLoading] = useState(false);

    const fetchComments = async () => {
        const response = await fetch(`/api/${schoolName}/class/${_class.id}/comments/${comments.length}`, {
            method: 'POST',
            next: { revalidate: 3600 }
        });
        
        if (response.ok) {
            const data = await response.json();
            switch (data.status) {
                case 204: {
                    return new Error(data.error);
                }
                case 200: {
                    setHasMoreComments(data.comments.length === MAX_COMMENTS);
                    return setComments([...comments, ...data.comments]);
                }
                default: {
                    return new Error('Failed to fetch additional ratings.');
                }
            }
        } else {
            throw new Error("Unable to fetch comments.");
        }
    }

    const onClick = async () => {
        setIsLoading(true);
        const res = await fetchComments();
        if (res instanceof Error) {
            setHasMoreComments(false);
            setAlert(res.message, "failure");
        }
        setIsLoading(false);
    };

    return (
        <div className='relative'>
            <CommentOptionsContainer className="flex justify-end mb-4">
                <CallToAction className="bg-primary text-black h-[2.5rem]">Filter</CallToAction>
            </CommentOptionsContainer>
            <div className="flex flex-col gap-y-16">
                {comments.map((comment: CommentType, index: number) => 
                    <div key={index}>
                        <Comment comment={comment} />
                    </div>
                )}
            </div>
            {hasMoreComments
                ? isLoading 
                    ? <div className='my-5'><LoadingSpinner className='w-8 center relative top-12'/></div>
                    : <LoadMore onClick={onClick} className="w-max py-2 px-8 center text-black my-8 relative top-12" />
                : null
            }
       </div>
    )
}