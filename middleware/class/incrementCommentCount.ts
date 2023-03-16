import prisma from '@/lib/prismadb'

prisma.$use(async (params, next) => {
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