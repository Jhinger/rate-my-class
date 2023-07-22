import prisma from '@/lib/prismadb';
import { redirect }from 'next/navigation';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import UserComments from '@/components/UserComments';
import { MAX_COMMENTS } from '@/constants';

async function getUserComments(id: string) {
    const comments = await prisma.comment.findMany({
        where: {
            userId: id
        },
        take: MAX_COMMENTS,
        orderBy: {
            createdAt: 'desc'
        }
    });

    return comments;
}

const UserPage = async ({ params }: { params: { id: string } }) => {

    const session = await getServerSession(authOptions);

    const { id } = params;
    if (!session || session.user.id !== id) {
        redirect('/');
    }

    const userComments = await getUserComments(id);

    return (
        <div className=''>
            <UserComments userComments={userComments} userId={session.user.id} />
        </div>
    )
}

export default UserPage;