import { PrismaClient } from "@prisma/client";
import incrementCommentCount from '@/middleware/class/incrementCommentCount';

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma || new PrismaClient();

prisma.$use(incrementCommentCount);

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export default prisma;