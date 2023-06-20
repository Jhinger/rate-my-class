import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DepartmentUncheckedUpdateManyWithoutSchoolNestedInputObjectSchema } from './DepartmentUncheckedUpdateManyWithoutSchoolNestedInput.schema';
import { ClassUncheckedUpdateManyWithoutSchoolNestedInputObjectSchema } from './ClassUncheckedUpdateManyWithoutSchoolNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
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
      .lazy(
        () => DepartmentUncheckedUpdateManyWithoutSchoolNestedInputObjectSchema,
      )
      .optional(),
    classes: z
      .lazy(() => ClassUncheckedUpdateManyWithoutSchoolNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SchoolUncheckedUpdateInputObjectSchema = Schema;
