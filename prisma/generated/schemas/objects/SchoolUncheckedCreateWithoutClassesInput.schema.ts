import { z } from 'zod';
import { DepartmentUncheckedCreateNestedManyWithoutSchoolInputObjectSchema } from './DepartmentUncheckedCreateNestedManyWithoutSchoolInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolUncheckedCreateWithoutClassesInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    short: z.string(),
    departments: z
      .lazy(
        () => DepartmentUncheckedCreateNestedManyWithoutSchoolInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SchoolUncheckedCreateWithoutClassesInputObjectSchema = Schema;
