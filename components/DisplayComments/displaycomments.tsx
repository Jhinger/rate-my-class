"use client";

import LoadMore from '@/components/Button/LoadMore';
import Comment from '@/components/Comment';
import { use, useState } from 'react';
import { MAX_COMMENTS } from '@/constants';

import type { Class, Comment as CommentType } from "@prisma/client";

interface IDisplayCommentsProps {
    schoolName: string;
    _class: Partial<Class>;
    _comments: CommentType[];
}

export default function DisplayComments({ schoolName, _class, _comments }: IDisplayCommentsProps) {
    const [comments, setComments] = useState(_comments);

    const fetchComments = async () => {
        const response = await fetch(`/api/${schoolName}/class/${_class.id}/comments/${comments.length}`, {
            method: 'POST',
            body: JSON.stringify({ skip: comments.length, take: MAX_COMMENTS }),
            next: { revalidate: 3600 }
        });
        
        if (response.ok) {
            const newComments = await response.json();
            if (newComments.status === 401) {
                console.log(newComments);
                console.log("HERE");
                return '';
            }
            // setComments({...comments, ...newComments});
        } else {
            throw new Error("Unable to fetch comments.");
        }
    }

    const onClick = async () => await fetchComments();

    return (
        <div className='relative'>
            <div className="flex flex-col gap-y-12">
                {comments.map((comment: CommentType, index: number) => 
                    <div key={index}>
                        <Comment comment={comment} />
                    </div>
                )}
            </div>
            <LoadMore onClick={onClick} className="w-max py-2 px-8 center text-black my-8 relative top-12" />
       </div>
    )
}