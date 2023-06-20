import { z } from 'zod';
import { ClassCreateNestedManyWithoutSchoolInputObjectSchema } from './ClassCreateNestedManyWithoutSchoolInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolCreateWithoutDepartmentsInput> = z
  .object({
    name: z.string(),
    short: z.string(),
    classes: z
      .lazy(() => ClassCreateNestedManyWithoutSchoolInputObjectSchema)
      .optional(),
  })
  .strict();

export const SchoolCreateWithoutDepartmentsInputObjectSchema = Schema;
