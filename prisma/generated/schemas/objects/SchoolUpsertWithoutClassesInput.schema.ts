import { z } from 'zod';
import { SchoolUpdateWithoutClassesInputObjectSchema } from './SchoolUpdateWithoutClassesInput.schema';
import { SchoolUncheckedUpdateWithoutClassesInputObjectSchema } from './SchoolUncheckedUpdateWithoutClassesInput.schema';
import { SchoolCreateWithoutClassesInputObjectSchema } from './SchoolCreateWithoutClassesInput.schema';
import { SchoolUncheckedCreateWithoutClassesInputObjectSchema } from './SchoolUncheckedCreateWithoutClassesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolUpsertWithoutClassesInput> = z
  .object({
    update: z.union([
      z.lazy(() => SchoolUpdateWithoutClassesInputObjectSchema),
      z.lazy(() => SchoolUncheckedUpdateWithoutClassesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SchoolCreateWithoutClassesInputObjectSchema),
      z.lazy(() => SchoolUncheckedCreateWithoutClassesInputObjectSchema),
    ]),
  })
  .strict();

export const SchoolUpsertWithoutClassesInputObjectSchema = Schema;
