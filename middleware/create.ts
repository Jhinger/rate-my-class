import prisma from '@/lib/prismadb'

prisma.$use(async (params, next) => {
    if (params.model === 'Comment' && params.action === 'create') {
        // Update number of comments for this class.
        // Update average grade and average difficulty for this class.
    }
})