import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentUncheckedCreateWithoutClassesInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    avgGrade: z.number().optional(),
    schoolId: z.number(),
    numComments: z.number().optional(),
  })
  .strict();

export const DepartmentUncheckedCreateWithoutClassesInputObjectSchema = Schema;
