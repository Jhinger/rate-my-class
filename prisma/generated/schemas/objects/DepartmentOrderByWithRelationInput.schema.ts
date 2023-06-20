import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SchoolOrderByWithRelationInputObjectSchema } from './SchoolOrderByWithRelationInput.schema';
import { ClassOrderByRelationAggregateInputObjectSchema } from './ClassOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    avgGrade: z.lazy(() => SortOrderSchema).optional(),
    schoolId: z.lazy(() => SortOrderSchema).optional(),
    numComments: z.lazy(() => SortOrderSchema).optional(),
    school: z.lazy(() => SchoolOrderByWithRelationInputObjectSchema).optional(),
    classes: z
      .lazy(() => ClassOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const DepartmentOrderByWithRelationInputObjectSchema = Schema;
