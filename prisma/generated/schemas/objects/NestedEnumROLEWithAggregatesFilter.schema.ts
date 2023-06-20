import { z } from 'zod';
import { ROLESchema } from '../enums/ROLE.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumROLEFilterObjectSchema } from './NestedEnumROLEFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumROLEWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => ROLESchema).optional(),
    in: z
      .union([z.lazy(() => ROLESchema).array(), z.lazy(() => ROLESchema)])
      .optional(),
    notIn: z
      .union([z.lazy(() => ROLESchema).array(), z.lazy(() => ROLESchema)])
      .optional(),
    not: z
      .union([
        z.lazy(() => ROLESchema),
        z.lazy(() => NestedEnumROLEWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumROLEFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumROLEFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumROLEWithAggregatesFilterObjectSchema = Schema;
