import { z } from 'zod';
import { ReportCommentIdReporteeIdCompoundUniqueInputObjectSchema } from './ReportCommentIdReporteeIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReportWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    commentId_reporteeId: z
      .lazy(() => ReportCommentIdReporteeIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const ReportWhereUniqueInputObjectSchema = Schema;
