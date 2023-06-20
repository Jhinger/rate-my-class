import { z } from 'zod';
import { SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema';
import { SchoolCreateWithoutClassesInputObjectSchema } from './SchoolCreateWithoutClassesInput.schema';
import { SchoolUncheckedCreateWithoutClassesInputObjectSchema } from './SchoolUncheckedCreateWithoutClassesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolCreateOrConnectWithoutClassesInput> = z
  .object({
    where: z.lazy(() => SchoolWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SchoolCreateWithoutClassesInputObjectSchema),
      z.lazy(() => SchoolUncheckedCreateWithoutClassesInputObjectSchema),
    ]),
  })
  .strict();

export const SchoolCreateOrConnectWithoutClassesInputObjectSchema = Schema;
