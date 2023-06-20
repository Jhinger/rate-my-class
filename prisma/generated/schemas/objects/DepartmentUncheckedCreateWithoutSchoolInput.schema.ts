import { z } from 'zod';
import { ClassUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema } from './ClassUncheckedCreateNestedManyWithoutDepartmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentUncheckedCreateWithoutSchoolInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    avgGrade: z.number().optional(),
    numComments: z.number().optional(),
    classes: z
      .lazy(
        () => ClassUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const DepartmentUncheckedCreateWithoutSchoolInputObjectSchema = Schema;
