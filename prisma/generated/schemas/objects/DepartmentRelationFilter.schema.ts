import { z } from 'zod';
import { DepartmentWhereInputObjectSchema } from './DepartmentWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentRelationFilter> = z
  .object({
    is: z
      .lazy(() => DepartmentWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => DepartmentWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const DepartmentRelationFilterObjectSchema = Schema;
