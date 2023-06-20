import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    avgGrade: z.literal(true).optional(),
    schoolId: z.literal(true).optional(),
    numComments: z.literal(true).optional(),
  })
  .strict();

export const DepartmentAvgAggregateInputObjectSchema = Schema;
