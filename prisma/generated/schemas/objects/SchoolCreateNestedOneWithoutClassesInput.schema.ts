import { z } from 'zod';
import { SchoolCreateWithoutClassesInputObjectSchema } from './SchoolCreateWithoutClassesInput.schema';
import { SchoolUncheckedCreateWithoutClassesInputObjectSchema } from './SchoolUncheckedCreateWithoutClassesInput.schema';
import { SchoolCreateOrConnectWithoutClassesInputObjectSchema } from './SchoolCreateOrConnectWithoutClassesInput.schema';
import { SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolCreateNestedOneWithoutClassesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SchoolCreateWithoutClassesInputObjectSchema),
        z.lazy(() => SchoolUncheckedCreateWithoutClassesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => SchoolCreateOrConnectWithoutClassesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => SchoolWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const SchoolCreateNestedOneWithoutClassesInputObjectSchema = Schema;
