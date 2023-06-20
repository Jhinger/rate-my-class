import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DepartmentUpdateManyWithoutSchoolNestedInputObjectSchema } from './DepartmentUpdateManyWithoutSchoolNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolUpdateWithoutClassesInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    short: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    departments: z
      .lazy(() => DepartmentUpdateManyWithoutSchoolNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SchoolUpdateWithoutClassesInputObjectSchema = Schema;
