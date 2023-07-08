import prisma from '@/lib/prismadb'

export default prisma.$use(async (params, next) => {
    if (params.model === 'Comment' && params.action === 'create') {
        const classID = params.args.data.classId;
        await prisma.class.update({
            where: {
                id: classID
            },
            data: {
                numComments: {
                    increment: 1,
                }
            }
        })
    }

    return next(params);
})

// Check if grade is provided, otherwise we might not want to increment the number of comments.
// If we have to increment for other averages, we should run the update average functions before
// incrementing the counter.