import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    short: z.string(),
  })
  .strict();

export const SchoolCreateManyInputObjectSchema = Schema;
