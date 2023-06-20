import { z } from 'zod';
import { DepartmentCreateNestedManyWithoutSchoolInputObjectSchema } from './DepartmentCreateNestedManyWithoutSchoolInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolCreateWithoutClassesInput> = z
  .object({
    name: z.string(),
    short: z.string(),
    departments: z
      .lazy(() => DepartmentCreateNestedManyWithoutSchoolInputObjectSchema)
      .optional(),
  })
  .strict();

export const SchoolCreateWithoutClassesInputObjectSchema = Schema;
