import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CommentCountOrderByAggregateInputObjectSchema } from './CommentCountOrderByAggregateInput.schema';
import { CommentAvgOrderByAggregateInputObjectSchema } from './CommentAvgOrderByAggregateInput.schema';
import { CommentMaxOrderByAggregateInputObjectSchema } from './CommentMaxOrderByAggregateInput.schema';
import { CommentMinOrderByAggregateInputObjectSchema } from './CommentMinOrderByAggregateInput.schema';
import { CommentSumOrderByAggregateInputObjectSchema } from './CommentSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentOrderByWithAggregationInput> = z
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
    department: z.lazy(() => SortOrderSchema).optional(),
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
    _count: z
      .lazy(() => CommentCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => CommentAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => CommentMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CommentMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => CommentSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const CommentOrderByWithAggregationInputObjectSchema = Schema;
