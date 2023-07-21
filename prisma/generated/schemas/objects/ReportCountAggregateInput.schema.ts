import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReportCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    dateCreated: z.literal(true).optional(),
    classId: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    commentId: z.literal(true).optional(),
    reporteeId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ReportCountAggregateInputObjectSchema = Schema;
