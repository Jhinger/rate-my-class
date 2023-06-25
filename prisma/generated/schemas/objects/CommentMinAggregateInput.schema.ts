import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    classId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    difficulty: z.literal(true).optional(),
    isRecommended: z.literal(true).optional(),
    upvoteCount: z.literal(true).optional(),
    workload: z.literal(true).optional(),
    teacher: z.literal(true).optional(),
    isGPABooster: z.literal(true).optional(),
    overallRating: z.literal(true).optional(),
    deleted: z.literal(true).optional(),
    delivery: z.literal(true).optional(),
    gradeRecieved: z.literal(true).optional(),
    primaryText: z.literal(true).optional(),
    secondaryText: z.literal(true).optional(),
  })
  .strict();

export const CommentMinAggregateInputObjectSchema = Schema;
