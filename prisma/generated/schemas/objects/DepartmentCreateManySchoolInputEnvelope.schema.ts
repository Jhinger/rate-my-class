import { z } from 'zod';
import { DepartmentCreateManySchoolInputObjectSchema } from './DepartmentCreateManySchoolInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentCreateManySchoolInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => DepartmentCreateManySchoolInputObjectSchema),
      z.lazy(() => DepartmentCreateManySchoolInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const DepartmentCreateManySchoolInputEnvelopeObjectSchema = Schema;
