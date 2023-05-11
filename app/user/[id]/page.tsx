import prisma from '@/lib/prismadb';

async function getUserComments(id: string) {
    const comments = await prisma.comment.findMany({
        where: {
            userId: id
        }
    });

    return comments;
}

const UserPage = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const userComments = await getUserComments(id);

    console.log(userComments);

    return (
        <div>
            { params.id }
        </div>
    )
}

export default UserPage;