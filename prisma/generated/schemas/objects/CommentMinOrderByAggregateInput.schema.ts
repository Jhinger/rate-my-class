import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    classId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    difficulty: z.lazy(() => SortOrderSchema).optional(),
    isRecommended: z.lazy(() => SortOrderSchema).optional(),
    upvoteCount: z.lazy(() => SortOrderSchema).optional(),
    workload: z.lazy(() => SortOrderSchema).optional(),
    teacher: z.lazy(() => SortOrderSchema).optional(),
    department: z.lazy(() => SortOrderSchema).optional(),
    isGPABooster: z.lazy(() => SortOrderSchema).optional(),
    overallRating: z.lazy(() => SortOrderSchema).optional(),
    deleted: z.lazy(() => SortOrderSchema).optional(),
    delivery: z.lazy(() => SortOrderSchema).optional(),
    gradeRecieved: z.lazy(() => SortOrderSchema).optional(),
    primaryText: z.lazy(() => SortOrderSchema).optional(),
    secondaryText: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const CommentMinOrderByAggregateInputObjectSchema = Schema;
