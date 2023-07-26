import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReportCommentIdReporteeIdCompoundUniqueInput> = z
  .object({
    commentId: z.number(),
    reporteeId: z.string(),
  })
  .strict();

export const ReportCommentIdReporteeIdCompoundUniqueInputObjectSchema = Schema;
