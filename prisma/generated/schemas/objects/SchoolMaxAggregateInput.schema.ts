import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    short: z.literal(true).optional(),
  })
  .strict();

export const SchoolMaxAggregateInputObjectSchema = Schema;
