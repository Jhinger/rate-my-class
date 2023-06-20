import { z } from 'zod';
import { ROLESchema } from '../enums/ROLE.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    id: z.string().optional(),
    email: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    emailVerified: z.coerce.date().optional().nullable(),
    image: z.string().optional().nullable(),
    role: z.lazy(() => ROLESchema).optional(),
    canEmail: z.boolean().optional(),
  })
  .strict();

export const UserCreateManyInputObjectSchema = Schema;
