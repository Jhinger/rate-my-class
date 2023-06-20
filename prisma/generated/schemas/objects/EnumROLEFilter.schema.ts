import { z } from 'zod';
import { ROLESchema } from '../enums/ROLE.schema';
import { NestedEnumROLEFilterObjectSchema } from './NestedEnumROLEFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumROLEFilter> = z
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
        z.lazy(() => NestedEnumROLEFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumROLEFilterObjectSchema = Schema;
