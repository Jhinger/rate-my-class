import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DepartmentOrderByWithRelationInputObjectSchema } from './DepartmentOrderByWithRelationInput.schema';
import { SchoolOrderByWithRelationInputObjectSchema } from './SchoolOrderByWithRelationInput.schema';
import { CommentOrderByRelationAggregateInputObjectSchema } from './CommentOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassOrderByWithRelationInput> = z
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
    department: z
      .lazy(() => DepartmentOrderByWithRelationInputObjectSchema)
      .optional(),
    school: z.lazy(() => SchoolOrderByWithRelationInputObjectSchema).optional(),
    comments: z
      .lazy(() => CommentOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ClassOrderByWithRelationInputObjectSchema = Schema;
