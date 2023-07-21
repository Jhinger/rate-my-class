import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ReportCountOrderByAggregateInputObjectSchema } from './ReportCountOrderByAggregateInput.schema';
import { ReportAvgOrderByAggregateInputObjectSchema } from './ReportAvgOrderByAggregateInput.schema';
import { ReportMaxOrderByAggregateInputObjectSchema } from './ReportMaxOrderByAggregateInput.schema';
import { ReportMinOrderByAggregateInputObjectSchema } from './ReportMinOrderByAggregateInput.schema';
import { ReportSumOrderByAggregateInputObjectSchema } from './ReportSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReportOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    dateCreated: z.lazy(() => SortOrderSchema).optional(),
    classId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    commentId: z.lazy(() => SortOrderSchema).optional(),
    reporteeId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ReportCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ReportAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ReportMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ReportMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ReportSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ReportOrderByWithAggregationInputObjectSchema = Schema;
