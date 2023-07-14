import { PrismaClient } from "@prisma/client";
import incrementCommentCount from '@/middleware/class/incrementCommentCount';
import updateAvgBooster from '@/middleware/class/updateAvgBooster';

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma || new PrismaClient();

prisma.$use(incrementCommentCount);
prisma.$use(updateAvgBooster);

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export default prisma;