import { z } from 'zod';
import { SchoolCreateNestedOneWithoutDepartmentsInputObjectSchema } from './SchoolCreateNestedOneWithoutDepartmentsInput.schema';
import { ClassCreateNestedManyWithoutDepartmentInputObjectSchema } from './ClassCreateNestedManyWithoutDepartmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentCreateInput> = z
  .object({
    name: z.string(),
    avgGrade: z.number().optional(),
    numComments: z.number().optional(),
    school: z.lazy(
      () => SchoolCreateNestedOneWithoutDepartmentsInputObjectSchema,
    ),
    classes: z
      .lazy(() => ClassCreateNestedManyWithoutDepartmentInputObjectSchema)
      .optional(),
  })
  .strict();

export const DepartmentCreateInputObjectSchema = Schema;
