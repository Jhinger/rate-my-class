import prisma from "@/lib/prismadb";
/*
export default prisma.$use(async (params, next) => {
    const ret = await next(params);

    if (params.model === 'Comment' && params.action === 'create') {
        const userDifficulty = params.args.data.difficulty;
        const classID = params.args.data.classId;

        const userClass = await prisma.class.findFirst({
            where: {
                id: classID
            },
            select: {
                avgDifficulty: true,
                numComments: true
            }
        });

        // TODO: Check whether @mapped names - if so, needs to be updated.
        const newAvgDifficulty = userClass?.avgDifficulty && userClass.numComments
            ? userClass.avgDifficulty + ((userDifficulty - userClass.avgDifficulty) / userClass.numComments)
            : null;

        await prisma.class.update({
            where: {
                id: classID
            },
            data: {
                avgDifficulty: {
                    set: newAvgDifficulty
                }
            }
        })
    }

    return ret;
})
*/

export {};
