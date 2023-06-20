import { z } from 'zod';
import { ClassWhereInputObjectSchema } from './ClassWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassRelationFilter> = z
  .object({
    is: z
      .lazy(() => ClassWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ClassWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ClassRelationFilterObjectSchema = Schema;
