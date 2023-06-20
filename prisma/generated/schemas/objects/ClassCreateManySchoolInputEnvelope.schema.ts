import { z } from 'zod';
import { ClassCreateManySchoolInputObjectSchema } from './ClassCreateManySchoolInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassCreateManySchoolInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ClassCreateManySchoolInputObjectSchema),
      z.lazy(() => ClassCreateManySchoolInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ClassCreateManySchoolInputEnvelopeObjectSchema = Schema;
