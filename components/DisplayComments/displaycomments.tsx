"use client";

import LoadMore from '@/components/Button/LoadMore';
import Comment from '@/components/Comment';
import { useState } from 'react';
import useAlert from '@/hooks/useAlert';
import LoadingSpinner from '@/components/LoadingSpinner';

import type { Class, Comment as CommentType } from "@prisma/client";

interface IDisplayCommentsProps {
    schoolName: string;
    _class: Partial<Class>;
    _comments: CommentType[];
}

export default function DisplayComments({ schoolName, _class, _comments }: IDisplayCommentsProps) {
    const { setAlert } = useAlert();
    const [comments, setComments] = useState(_comments);
    const [hasMoreComments, setHasMoreComments] = useState(true);
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
            <div className="flex flex-col gap-y-16">
                {comments.map((comment: CommentType, index: number) => 
                    <div key={index}>
                        <Comment comment={comment} />
                    </div>
                )}
            </div>
            {hasMoreComments
                ? isLoading 
                    ? <LoadingSpinner className='w-10 center relative top-12'/>
                    : <LoadMore onClick={onClick} className="w-max py-2 px-8 center text-black my-8 relative top-12" />
                : null
            }
       </div>
    )
}