import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DepartmentUncheckedUpdateManyWithoutSchoolNestedInputObjectSchema } from './DepartmentUncheckedUpdateManyWithoutSchoolNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolUncheckedUpdateWithoutClassesInput> = z
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
  })
  .strict();

export const SchoolUncheckedUpdateWithoutClassesInputObjectSchema = Schema;
