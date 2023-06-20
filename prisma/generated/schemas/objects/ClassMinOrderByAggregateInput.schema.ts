import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    schoolId: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    avgDifficulty: z.lazy(() => SortOrderSchema).optional(),
    avgGrade: z.lazy(() => SortOrderSchema).optional(),
    numComments: z.lazy(() => SortOrderSchema).optional(),
    avgBooster: z.lazy(() => SortOrderSchema).optional(),
    departmentId: z.lazy(() => SortOrderSchema).optional(),
    avgWorkload: z.lazy(() => SortOrderSchema).optional(),
    avgRecommended: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ClassMinOrderByAggregateInputObjectSchema = Schema;
