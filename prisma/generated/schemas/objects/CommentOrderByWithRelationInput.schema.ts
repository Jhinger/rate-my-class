import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ClassOrderByWithRelationInputObjectSchema } from './ClassOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    classId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    difficulty: z.lazy(() => SortOrderSchema).optional(),
    isRecommended: z.lazy(() => SortOrderSchema).optional(),
    upvoteCount: z.lazy(() => SortOrderSchema).optional(),
    workload: z.lazy(() => SortOrderSchema).optional(),
    teacher: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    isGPABooster: z.lazy(() => SortOrderSchema).optional(),
    overallRating: z.lazy(() => SortOrderSchema).optional(),
    tags: z.lazy(() => SortOrderSchema).optional(),
    deleted: z.lazy(() => SortOrderSchema).optional(),
    delivery: z.lazy(() => SortOrderSchema).optional(),
    gradeRecieved: z.lazy(() => SortOrderSchema).optional(),
    primaryText: z.lazy(() => SortOrderSchema).optional(),
    secondaryText: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    Class: z.lazy(() => ClassOrderByWithRelationInputObjectSchema).optional(),
    User: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const CommentOrderByWithRelationInputObjectSchema = Schema;
