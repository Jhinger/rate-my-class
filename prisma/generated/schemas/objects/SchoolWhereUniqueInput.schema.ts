import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
  })
  .strict();

export const SchoolWhereUniqueInputObjectSchema = Schema;
