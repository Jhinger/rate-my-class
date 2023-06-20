import { z } from 'zod';
import { ClassUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema } from './ClassUncheckedCreateNestedManyWithoutDepartmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    avgGrade: z.number().optional(),
    schoolId: z.number(),
    numComments: z.number().optional(),
    classes: z
      .lazy(
        () => ClassUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const DepartmentUncheckedCreateInputObjectSchema = Schema;
