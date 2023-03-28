import prisma from '@/lib/prismadb'

prisma.$use(async (params, next) => {
    const ret = await next(params);
})