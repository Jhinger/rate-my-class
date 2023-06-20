import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ClassCountOrderByAggregateInputObjectSchema } from './ClassCountOrderByAggregateInput.schema';
import { ClassAvgOrderByAggregateInputObjectSchema } from './ClassAvgOrderByAggregateInput.schema';
import { ClassMaxOrderByAggregateInputObjectSchema } from './ClassMaxOrderByAggregateInput.schema';
import { ClassMinOrderByAggregateInputObjectSchema } from './ClassMinOrderByAggregateInput.schema';
import { ClassSumOrderByAggregateInputObjectSchema } from './ClassSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    schoolId: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    avgDifficulty: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    avgGrade: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    numComments: z.lazy(() => SortOrderSchema).optional(),
    avgBooster: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    departmentId: z.lazy(() => SortOrderSchema).optional(),
    avgWorkload: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    avgRecommended: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => ClassCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ClassAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ClassMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ClassMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ClassSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ClassOrderByWithAggregationInputObjectSchema = Schema;
