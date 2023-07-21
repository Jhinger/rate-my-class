import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReportSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    classId: z.literal(true).optional(),
    commentId: z.literal(true).optional(),
  })
  .strict();

export const ReportSumAggregateInputObjectSchema = Schema;
