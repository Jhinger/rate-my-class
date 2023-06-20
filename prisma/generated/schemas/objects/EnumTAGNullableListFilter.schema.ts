import { z } from 'zod';
import { TAGSchema } from '../enums/TAG.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumTAGNullableListFilter> = z
  .object({
    equals: z
      .lazy(() => TAGSchema)
      .array()
      .optional()
      .nullable(),
    has: z
      .lazy(() => TAGSchema)
      .optional()
      .nullable(),
    hasEvery: z
      .lazy(() => TAGSchema)
      .array()
      .optional(),
    hasSome: z
      .lazy(() => TAGSchema)
      .array()
      .optional(),
    isEmpty: z.boolean().optional(),
  })
  .strict();

export const EnumTAGNullableListFilterObjectSchema = Schema;
