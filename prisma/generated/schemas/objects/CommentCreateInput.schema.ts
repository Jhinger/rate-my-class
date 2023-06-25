import { z } from 'zod';
import { CommentCreatetagsInputObjectSchema } from './CommentCreatetagsInput.schema';
import { TAGSchema } from '../enums/TAG.schema';
import { DELIVERYSchema } from '../enums/DELIVERY.schema';
import { ClassCreateNestedOneWithoutCommentsInputObjectSchema } from './ClassCreateNestedOneWithoutCommentsInput.schema';
import { UserCreateNestedOneWithoutCommentsInputObjectSchema } from './UserCreateNestedOneWithoutCommentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    difficulty: z.number(),
    isRecommended: z.boolean(),
    upvoteCount: z.number().optional(),
    workload: z.number(),
    teacher: z.string().optional().nullable(),
    isGPABooster: z.number(),
    overallRating: z.number(),
    tags: z
      .union([
        z.lazy(() => CommentCreatetagsInputObjectSchema),
        z.lazy(() => TAGSchema).array(),
      ])
      .optional(),
    deleted: z.boolean().optional(),
    delivery: z.lazy(() => DELIVERYSchema),
    gradeRecieved: z.number(),
    primaryText: z.string().optional(),
    secondaryText: z.string().optional().nullable(),
    class: z.lazy(() => ClassCreateNestedOneWithoutCommentsInputObjectSchema),
    User: z.lazy(() => UserCreateNestedOneWithoutCommentsInputObjectSchema),
  })
  .strict();

export const CommentCreateInputObjectSchema = Schema;
