import { z } from 'zod';
import { DELIVERYSchema } from '../enums/DELIVERY.schema';
import { NestedEnumDELIVERYWithAggregatesFilterObjectSchema } from './NestedEnumDELIVERYWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumDELIVERYFilterObjectSchema } from './NestedEnumDELIVERYFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumDELIVERYWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => DELIVERYSchema).optional(),
    in: z
      .union([
        z.lazy(() => DELIVERYSchema).array(),
        z.lazy(() => DELIVERYSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => DELIVERYSchema).array(),
        z.lazy(() => DELIVERYSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => DELIVERYSchema),
        z.lazy(() => NestedEnumDELIVERYWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumDELIVERYFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumDELIVERYFilterObjectSchema).optional(),
  })
  .strict();

export const EnumDELIVERYWithAggregatesFilterObjectSchema = Schema;
