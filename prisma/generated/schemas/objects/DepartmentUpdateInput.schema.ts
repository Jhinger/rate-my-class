import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { SchoolUpdateOneRequiredWithoutDepartmentsNestedInputObjectSchema } from './SchoolUpdateOneRequiredWithoutDepartmentsNestedInput.schema';
import { ClassUpdateManyWithoutDepartmentNestedInputObjectSchema } from './ClassUpdateManyWithoutDepartmentNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    avgGrade: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    numComments: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    school: z
      .lazy(
        () => SchoolUpdateOneRequiredWithoutDepartmentsNestedInputObjectSchema,
      )
      .optional(),
    classes: z
      .lazy(() => ClassUpdateManyWithoutDepartmentNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const DepartmentUpdateInputObjectSchema = Schema;
