import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentCreateManySchoolInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    avgGrade: z.number().optional(),
    numComments: z.number().optional(),
  })
  .strict();

export const DepartmentCreateManySchoolInputObjectSchema = Schema;
