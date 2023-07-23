'use client';

import { useState } from 'react';
import useAlert from '@/hooks/useAlert';
import type { Comment as CommentType } from '@prisma/client';
import Comment from '@/components/Comment';
import LoadMore from '@/components/Button/LoadMore';
import LoadingSpinner from '@/components/LoadingSpinner';
import { MAX_COMMENTS } from '@/constants';

interface IUserCommentsProps {
    userComments: CommentType[]
    userId: string;
}

const UserComments = ({ userComments, userId }: IUserCommentsProps) => {
    const { setAlert } = useAlert();
    const [comments, setComments] = useState(userComments);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMoreComments, setHasMoreComments] = useState(userComments.length === MAX_COMMENTS);

    const fetchComments = async () => {
        const res = await fetch(`/api/user/${userId}/comments/${comments.length}`, {
            method: 'POST'
        })

        if (res.ok) {
            const data = await res.json();
            switch (data.status) {
                case 200: {
                    setHasMoreComments(data.comments.length === MAX_COMMENTS);
                    return setComments([...comments, ...data.comments]);
                }
                case 204: {
                    return new Error(data.error);
                }
                case 401: {
                    return new Error(data.error);
                }
                case 403: {
                    return new Error(data.error);
                }
                default: {
                    return new Error('Failed to fetch additional ratings.');
                }
            }
        } else {
            throw new Error("Unable to fetch additional ratings.")
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
    }

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
                    ? <div className='my-5'><LoadingSpinner className='w-8 center relative top-12'/></div>
                    : <LoadMore onClick={onClick} className="w-max py-2 px-8 center text-black my-8 relative top-12" />
                : null
            }
       </div>
    )
}

export default UserComments;