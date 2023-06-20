import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassCreateManyDepartmentInput> = z
  .object({
    id: z.number().optional(),
    schoolId: z.number(),
    name: z.string(),
    avgDifficulty: z.number().optional().nullable(),
    avgGrade: z.number().optional().nullable(),
    numComments: z.number().optional(),
    avgBooster: z.number().optional().nullable(),
    avgWorkload: z.number().optional().nullable(),
    avgRecommended: z.number().optional().nullable(),
  })
  .strict();

export const ClassCreateManyDepartmentInputObjectSchema = Schema;
