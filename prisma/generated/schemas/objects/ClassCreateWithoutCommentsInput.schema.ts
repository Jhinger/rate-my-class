import { z } from 'zod';
import { DepartmentCreateNestedOneWithoutClassesInputObjectSchema } from './DepartmentCreateNestedOneWithoutClassesInput.schema';
import { SchoolCreateNestedOneWithoutClassesInputObjectSchema } from './SchoolCreateNestedOneWithoutClassesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassCreateWithoutCommentsInput> = z
  .object({
    name: z.string(),
    avgDifficulty: z.number().optional().nullable(),
    avgGrade: z.number().optional().nullable(),
    numComments: z.number().optional(),
    avgBooster: z.number().optional().nullable(),
    avgWorkload: z.number().optional().nullable(),
    avgRecommended: z.number().optional().nullable(),
    department: z.lazy(
      () => DepartmentCreateNestedOneWithoutClassesInputObjectSchema,
    ),
    school: z.lazy(() => SchoolCreateNestedOneWithoutClassesInputObjectSchema),
  })
  .strict();

export const ClassCreateWithoutCommentsInputObjectSchema = Schema;
