import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    avgGrade: z.lazy(() => SortOrderSchema).optional(),
    schoolId: z.lazy(() => SortOrderSchema).optional(),
    numComments: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const DepartmentAvgOrderByAggregateInputObjectSchema = Schema;