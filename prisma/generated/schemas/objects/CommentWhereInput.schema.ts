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
import { ClassRelationFilterObjectSchema } from './ClassRelationFilter.schema';
import { ClassWhereInputObjectSchema } from './ClassWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CommentWhereInputObjectSchema),
        z.lazy(() => CommentWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CommentWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CommentWhereInputObjectSchema),
        z.lazy(() => CommentWhereInputObjectSchema).array(),
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
    Class: z
      .union([
        z.lazy(() => ClassRelationFilterObjectSchema),
        z.lazy(() => ClassWhereInputObjectSchema),
      ])
      .optional(),
    User: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const CommentWhereInputObjectSchema = Schema;
