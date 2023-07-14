import prisma from '@/lib/prismadb'
import type { Prisma } from '@prisma/client';

export default async function incrementCommentCount(
        params: Prisma.MiddlewareParams, 
        next: (params: Prisma.MiddlewareParams) => Promise<any>
    ) {
    if (params.model === 'Comment' && params.action === 'create') {
        const classID = params.args.data.class.connect.id;
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

        console.log('Finished running Increment Count');
    }

    const result = await next(params);
    return result;
}

// Check if grade is provided, otherwise we might not want to increment the number of comments.
// If we have to increment for other averages, we should run the update average functions before
// incrementing the counter.