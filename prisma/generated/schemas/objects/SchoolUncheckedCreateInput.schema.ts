import { z } from 'zod';
import { DepartmentUncheckedCreateNestedManyWithoutSchoolInputObjectSchema } from './DepartmentUncheckedCreateNestedManyWithoutSchoolInput.schema';
import { ClassUncheckedCreateNestedManyWithoutSchoolInputObjectSchema } from './ClassUncheckedCreateNestedManyWithoutSchoolInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    short: z.string(),
    departments: z
      .lazy(
        () => DepartmentUncheckedCreateNestedManyWithoutSchoolInputObjectSchema,
      )
      .optional(),
    classes: z
      .lazy(() => ClassUncheckedCreateNestedManyWithoutSchoolInputObjectSchema)
      .optional(),
  })
  .strict();

export const SchoolUncheckedCreateInputObjectSchema = Schema;
