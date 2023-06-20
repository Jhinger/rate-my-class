import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DepartmentOrderByRelationAggregateInputObjectSchema } from './DepartmentOrderByRelationAggregateInput.schema';
import { ClassOrderByRelationAggregateInputObjectSchema } from './ClassOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    short: z.lazy(() => SortOrderSchema).optional(),
    departments: z
      .lazy(() => DepartmentOrderByRelationAggregateInputObjectSchema)
      .optional(),
    classes: z
      .lazy(() => ClassOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const SchoolOrderByWithRelationInputObjectSchema = Schema;
