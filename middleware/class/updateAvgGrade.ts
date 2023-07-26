import prisma from "@/lib/prismadb";
/*
export default prisma.$use(async (params, next) => {
    const ret = await next(params);

    /* if (params.model === 'Comment' && params.action === 'create') {
        const userGrade = params.args.data.grade_recieved;
        const classID = params.args.data.classId;

        const userClass = await prisma.class.findFirst({
            where: {
                id: classID
            },
            select: {
                avgGrade: true,
                numComments: true
            }
        });

        // TODO: Check whether @mapped names - if so, needs to be updated.
        const newAvgGrade = userClass?.avgGrade && userClass.numComments
            ? userClass.avgGrade + ((userGrade - userClass.avgGrade) / userClass.numComments)
            : null;

        await prisma.class.update({
            where: {
                id: classID
            },
            data: {
                avgGrade: {
                    set: newAvgGrade
                }
            }
        })
    } 

    return ret;
})
*/

export {};
