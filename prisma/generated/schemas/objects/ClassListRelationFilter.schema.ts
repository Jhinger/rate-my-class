import { z } from 'zod';
import { ClassWhereInputObjectSchema } from './ClassWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassListRelationFilter> = z
  .object({
    every: z.lazy(() => ClassWhereInputObjectSchema).optional(),
    some: z.lazy(() => ClassWhereInputObjectSchema).optional(),
    none: z.lazy(() => ClassWhereInputObjectSchema).optional(),
  })
  .strict();

export const ClassListRelationFilterObjectSchema = Schema;
