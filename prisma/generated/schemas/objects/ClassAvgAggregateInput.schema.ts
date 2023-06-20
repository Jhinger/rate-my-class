import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    schoolId: z.literal(true).optional(),
    avgDifficulty: z.literal(true).optional(),
    avgGrade: z.literal(true).optional(),
    numComments: z.literal(true).optional(),
    avgBooster: z.literal(true).optional(),
    departmentId: z.literal(true).optional(),
    avgWorkload: z.literal(true).optional(),
    avgRecommended: z.literal(true).optional(),
  })
  .strict();

export const ClassAvgAggregateInputObjectSchema = Schema;
