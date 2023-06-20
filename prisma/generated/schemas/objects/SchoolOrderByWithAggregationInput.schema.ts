import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SchoolCountOrderByAggregateInputObjectSchema } from './SchoolCountOrderByAggregateInput.schema';
import { SchoolAvgOrderByAggregateInputObjectSchema } from './SchoolAvgOrderByAggregateInput.schema';
import { SchoolMaxOrderByAggregateInputObjectSchema } from './SchoolMaxOrderByAggregateInput.schema';
import { SchoolMinOrderByAggregateInputObjectSchema } from './SchoolMinOrderByAggregateInput.schema';
import { SchoolSumOrderByAggregateInputObjectSchema } from './SchoolSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    short: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SchoolCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => SchoolAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => SchoolMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SchoolMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => SchoolSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const SchoolOrderByWithAggregationInputObjectSchema = Schema;
