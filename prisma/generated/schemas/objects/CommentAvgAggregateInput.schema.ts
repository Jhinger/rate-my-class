import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    classId: z.literal(true).optional(),
    difficulty: z.literal(true).optional(),
    upvoteCount: z.literal(true).optional(),
    workload: z.literal(true).optional(),
    isGPABooster: z.literal(true).optional(),
    overallRating: z.literal(true).optional(),
    gradeRecieved: z.literal(true).optional(),
  })
  .strict();

export const CommentAvgAggregateInputObjectSchema = Schema;
