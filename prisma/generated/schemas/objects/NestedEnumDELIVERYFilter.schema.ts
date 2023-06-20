import { z } from 'zod';
import { DELIVERYSchema } from '../enums/DELIVERY.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumDELIVERYFilter> = z
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
        z.lazy(() => NestedEnumDELIVERYFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumDELIVERYFilterObjectSchema = Schema;
