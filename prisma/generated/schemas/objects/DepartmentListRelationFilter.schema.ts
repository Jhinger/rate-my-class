import { z } from 'zod';
import { DepartmentWhereInputObjectSchema } from './DepartmentWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentListRelationFilter> = z
  .object({
    every: z.lazy(() => DepartmentWhereInputObjectSchema).optional(),
    some: z.lazy(() => DepartmentWhereInputObjectSchema).optional(),
    none: z.lazy(() => DepartmentWhereInputObjectSchema).optional(),
  })
  .strict();

export const DepartmentListRelationFilterObjectSchema = Schema;
