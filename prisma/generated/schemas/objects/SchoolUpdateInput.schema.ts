import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DepartmentUpdateManyWithoutSchoolNestedInputObjectSchema } from './DepartmentUpdateManyWithoutSchoolNestedInput.schema';
import { ClassUpdateManyWithoutSchoolNestedInputObjectSchema } from './ClassUpdateManyWithoutSchoolNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolUpdateInput> = z
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
    classes: z
      .lazy(() => ClassUpdateManyWithoutSchoolNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SchoolUpdateInputObjectSchema = Schema;
