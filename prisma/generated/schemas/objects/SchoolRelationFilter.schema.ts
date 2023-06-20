import { z } from 'zod';
import { SchoolWhereInputObjectSchema } from './SchoolWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolRelationFilter> = z
  .object({
    is: z
      .lazy(() => SchoolWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => SchoolWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const SchoolRelationFilterObjectSchema = Schema;
