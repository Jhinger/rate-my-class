import { z } from 'zod';
import { ClassCreateNestedManyWithoutDepartmentInputObjectSchema } from './ClassCreateNestedManyWithoutDepartmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentCreateWithoutSchoolInput> = z
  .object({
    name: z.string(),
    avgGrade: z.number().optional(),
    numComments: z.number().optional(),
    classes: z
      .lazy(() => ClassCreateNestedManyWithoutDepartmentInputObjectSchema)
      .optional(),
  })
  .strict();

export const DepartmentCreateWithoutSchoolInputObjectSchema = Schema;
