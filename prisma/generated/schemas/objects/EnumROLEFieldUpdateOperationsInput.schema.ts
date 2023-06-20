import { z } from 'zod';
import { ROLESchema } from '../enums/ROLE.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumROLEFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => ROLESchema).optional(),
  })
  .strict();

export const EnumROLEFieldUpdateOperationsInputObjectSchema = Schema;
