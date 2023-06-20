import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    classId: z.lazy(() => SortOrderSchema).optional(),
    difficulty: z.lazy(() => SortOrderSchema).optional(),
    upvoteCount: z.lazy(() => SortOrderSchema).optional(),
    workload: z.lazy(() => SortOrderSchema).optional(),
    isGPABooster: z.lazy(() => SortOrderSchema).optional(),
    overallRating: z.lazy(() => SortOrderSchema).optional(),
    gradeRecieved: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const CommentAvgOrderByAggregateInputObjectSchema = Schema;
