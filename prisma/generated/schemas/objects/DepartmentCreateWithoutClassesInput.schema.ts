import { z } from 'zod';
import { SchoolCreateNestedOneWithoutDepartmentsInputObjectSchema } from './SchoolCreateNestedOneWithoutDepartmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentCreateWithoutClassesInput> = z
  .object({
    name: z.string(),
    avgGrade: z.number().optional(),
    numComments: z.number().optional(),
    school: z.lazy(
      () => SchoolCreateNestedOneWithoutDepartmentsInputObjectSchema,
    ),
  })
  .strict();

export const DepartmentCreateWithoutClassesInputObjectSchema = Schema;
