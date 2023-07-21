import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReportSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    classId: z.lazy(() => SortOrderSchema).optional(),
    commentId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ReportSumOrderByAggregateInputObjectSchema = Schema;
