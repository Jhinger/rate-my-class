import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { EnumTAGNullableListFilterObjectSchema } from './EnumTAGNullableListFilter.schema';
import { EnumDELIVERYFilterObjectSchema } from './EnumDELIVERYFilter.schema';
import { DELIVERYSchema } from '../enums/DELIVERY.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CommentScalarWhereInputObjectSchema),
        z.lazy(() => CommentScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CommentScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CommentScalarWhereInputObjectSchema),
        z.lazy(() => CommentScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    classId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    difficulty: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    isRecommended: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    upvoteCount: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    workload: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    teacher: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    isGPABooster: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    overallRating: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    tags: z.lazy(() => EnumTAGNullableListFilterObjectSchema).optional(),
    deleted: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    delivery: z
      .union([
        z.lazy(() => EnumDELIVERYFilterObjectSchema),
        z.lazy(() => DELIVERYSchema),
      ])
      .optional(),
    gradeRecieved: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    primaryText: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    secondaryText: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const CommentScalarWhereInputObjectSchema = Schema;
