import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ClassUpdateManyWithoutSchoolNestedInputObjectSchema } from './ClassUpdateManyWithoutSchoolNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolUpdateWithoutDepartmentsInput> = z
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
    classes: z
      .lazy(() => ClassUpdateManyWithoutSchoolNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SchoolUpdateWithoutDepartmentsInputObjectSchema = Schema;
