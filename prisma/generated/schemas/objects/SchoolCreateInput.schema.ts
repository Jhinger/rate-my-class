import { z } from 'zod';
import { DepartmentCreateNestedManyWithoutSchoolInputObjectSchema } from './DepartmentCreateNestedManyWithoutSchoolInput.schema';
import { ClassCreateNestedManyWithoutSchoolInputObjectSchema } from './ClassCreateNestedManyWithoutSchoolInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolCreateInput> = z
  .object({
    name: z.string(),
    short: z.string(),
    departments: z
      .lazy(() => DepartmentCreateNestedManyWithoutSchoolInputObjectSchema)
      .optional(),
    classes: z
      .lazy(() => ClassCreateNestedManyWithoutSchoolInputObjectSchema)
      .optional(),
  })
  .strict();

export const SchoolCreateInputObjectSchema = Schema;
