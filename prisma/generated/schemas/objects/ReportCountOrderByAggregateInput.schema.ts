import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReportCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    dateCreated: z.lazy(() => SortOrderSchema).optional(),
    classId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    commentId: z.lazy(() => SortOrderSchema).optional(),
    reporteeId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ReportCountOrderByAggregateInputObjectSchema = Schema;
