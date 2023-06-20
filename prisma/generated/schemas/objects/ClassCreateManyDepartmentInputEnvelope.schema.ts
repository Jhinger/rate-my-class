import { z } from 'zod';
import { ClassCreateManyDepartmentInputObjectSchema } from './ClassCreateManyDepartmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassCreateManyDepartmentInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ClassCreateManyDepartmentInputObjectSchema),
      z.lazy(() => ClassCreateManyDepartmentInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ClassCreateManyDepartmentInputEnvelopeObjectSchema = Schema;
