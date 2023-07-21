"use client";

import Tray from '@/components/Tray';
import TrayItem from '@/components/TrayItem';
import Icon from '@/components/Button/Icon';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { MoreVerticalIcon } from 'lucide-react';
import useAlert from '@/hooks/useAlert';
import { usePathname } from 'next/navigation';
import LoadingSpinner from '@/components/LoadingSpinner';

import type { Comment } from '@prisma/client';
import { useState, useRef } from 'react';

type CommentActionProps = Pick<Comment, 'classId' | 'id' | 'userId'>;

const CommentActions = ({ classId, id, userId }: CommentActionProps) => {
    const { setAlert } = useAlert();
    const [isTrayVisible, setIsTrayVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const isOnUserRoute = pathname.startsWith('/user/');

    const reportComment = async () => {
        const res = await fetch('/api/report/comment', {
            method: 'POST',
            body: JSON.stringify({ classId: classId, commentId: id, userId: userId })
        });

        if (res.ok) {
            const data = await res.json();
            switch (data.status) {
                case 200: return;
                case 401: {
                    return new Error(data.error);
                }
                case 403: {
                    return new Error(data.error);
                }
                default: {
                    return new Error('5XX - Failed to report rating');
                }
            }
        } else {
            throw new Error("4XX - Failed to report rating.");
        }
    }

    const deleteComment = async () => {
        const res = await fetch('/api/delete/comment', {
            method: 'POST',
            body: JSON.stringify({ classId: classId, userId: userId, commentId: id })
        });

        if (res.ok) {
            const data = await res.json();
            switch(data.status) {
                case 200: return;
                case 401: {
                    return new Error(data.error);
                }
                case 403: {
                    return new Error(data.error);
                }
                default: {
                    return new Error('5XX - Failed to delete rating');
                }
            }
        } else {
            throw new Error("4XX - Failed to delete rating.")
        }
    }

    const toggleTrayVisibility = () => {
        setIsTrayVisible(!isTrayVisible);
    }

    const onReportClick = async () => {
        setIsLoading(true);
        const res = await reportComment();
        if (res instanceof Error) {
            setAlert(res.message, "failure");
            setIsTrayVisible(false);
            setIsLoading(false);
            return;
        }
        setAlert("Thank You - The Rating has been reported", "success");
        setIsTrayVisible(false);
        setIsLoading(false);
    }

    const onDeleteClick = async () => {
        setIsLoading(true);
        const res = await deleteComment();
        if (res instanceof Error) {
            setAlert(res.message, "failure");
            setIsTrayVisible(false);
            return;
        }
        setAlert("Your Rating has been deleted.", "success");
        setIsTrayVisible(false);
        setIsLoading(false);
    }

    useOnClickOutside(ref, () => setIsTrayVisible(false));

    return (
        <div ref={ref} className='relative'>
            <div onClick={toggleTrayVisibility}>
                <Icon>
                    <MoreVerticalIcon size={20} className="hover:cursor-pointer hover:text-blue-500 duration-100 unselectable" />
                </Icon>
            </div>

            <Tray isVisible={isTrayVisible} className="absolute top-full right-0 z-10 my-1">
                {isOnUserRoute 
                    ?
                        <TrayItem onClick={onDeleteClick} className='unselectable animate-fadeDown bg-secondary text-primary text-xs px-4 py-2 my-1.5 font-bold hover:text-red-400 duration-200 ring-2 ring-primary ring-offset-2 ring-offset-secondary hover:ring-red-400'>
                            {isLoading ? <LoadingSpinner className='w-4' /> : 'Delete'}
                        </TrayItem>
                    :
                        <TrayItem onClick={onReportClick} className='unselectable animate-fadeDown bg-secondary text-primary text-xs px-4 py-2 my-1.5 font-bold hover:text-red-400 duration-200 ring-2 ring-primary ring-offset-2 ring-offset-secondary hover:ring-red-400'>
                            {isLoading ? <LoadingSpinner className='w-4' /> : 'Report'}
                        </TrayItem>
                }
            </Tray>
        </div>
    )
}

export default CommentActions;