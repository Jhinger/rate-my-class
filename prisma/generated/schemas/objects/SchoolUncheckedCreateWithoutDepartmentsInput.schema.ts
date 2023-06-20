import { z } from 'zod';
import { ClassUncheckedCreateNestedManyWithoutSchoolInputObjectSchema } from './ClassUncheckedCreateNestedManyWithoutSchoolInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolUncheckedCreateWithoutDepartmentsInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    short: z.string(),
    classes: z
      .lazy(() => ClassUncheckedCreateNestedManyWithoutSchoolInputObjectSchema)
      .optional(),
  })
  .strict();

export const SchoolUncheckedCreateWithoutDepartmentsInputObjectSchema = Schema;
