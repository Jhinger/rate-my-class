import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { CommentUpdatetagsInputObjectSchema } from './CommentUpdatetagsInput.schema';
import { TAGSchema } from '../enums/TAG.schema';
import { DELIVERYSchema } from '../enums/DELIVERY.schema';
import { EnumDELIVERYFieldUpdateOperationsInputObjectSchema } from './EnumDELIVERYFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutCommentsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCommentsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpdateWithoutClassInput> = z
  .object({
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    difficulty: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isRecommended: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    upvoteCount: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    workload: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    teacher: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    isGPABooster: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    overallRating: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tags: z
      .union([
        z.lazy(() => CommentUpdatetagsInputObjectSchema),
        z.lazy(() => TAGSchema).array(),
      ])
      .optional(),
    deleted: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    delivery: z
      .union([
        z.lazy(() => DELIVERYSchema),
        z.lazy(() => EnumDELIVERYFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    gradeRecieved: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    primaryText: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    secondaryText: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    User: z
      .lazy(() => UserUpdateOneRequiredWithoutCommentsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CommentUpdateWithoutClassInputObjectSchema = Schema;
