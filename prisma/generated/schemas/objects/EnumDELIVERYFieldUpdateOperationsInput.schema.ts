import { z } from 'zod';
import { DELIVERYSchema } from '../enums/DELIVERY.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumDELIVERYFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => DELIVERYSchema).optional(),
  })
  .strict();

export const EnumDELIVERYFieldUpdateOperationsInputObjectSchema = Schema;
