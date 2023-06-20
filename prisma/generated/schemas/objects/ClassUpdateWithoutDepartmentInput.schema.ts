import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { SchoolUpdateOneRequiredWithoutClassesNestedInputObjectSchema } from './SchoolUpdateOneRequiredWithoutClassesNestedInput.schema';
import { CommentUpdateManyWithoutClassNestedInputObjectSchema } from './CommentUpdateManyWithoutClassNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassUpdateWithoutDepartmentInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    avgDifficulty: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    avgGrade: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    numComments: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    avgBooster: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    avgWorkload: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    avgRecommended: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    school: z
      .lazy(() => SchoolUpdateOneRequiredWithoutClassesNestedInputObjectSchema)
      .optional(),
    comments: z
      .lazy(() => CommentUpdateManyWithoutClassNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ClassUpdateWithoutDepartmentInputObjectSchema = Schema;
