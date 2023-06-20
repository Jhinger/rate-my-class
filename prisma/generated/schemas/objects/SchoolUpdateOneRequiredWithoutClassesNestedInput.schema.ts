import { z } from 'zod';
import { SchoolCreateWithoutClassesInputObjectSchema } from './SchoolCreateWithoutClassesInput.schema';
import { SchoolUncheckedCreateWithoutClassesInputObjectSchema } from './SchoolUncheckedCreateWithoutClassesInput.schema';
import { SchoolCreateOrConnectWithoutClassesInputObjectSchema } from './SchoolCreateOrConnectWithoutClassesInput.schema';
import { SchoolUpsertWithoutClassesInputObjectSchema } from './SchoolUpsertWithoutClassesInput.schema';
import { SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema';
import { SchoolUpdateWithoutClassesInputObjectSchema } from './SchoolUpdateWithoutClassesInput.schema';
import { SchoolUncheckedUpdateWithoutClassesInputObjectSchema } from './SchoolUncheckedUpdateWithoutClassesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolUpdateOneRequiredWithoutClassesNestedInput> =
  z
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
      upsert: z
        .lazy(() => SchoolUpsertWithoutClassesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => SchoolWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => SchoolUpdateWithoutClassesInputObjectSchema),
          z.lazy(() => SchoolUncheckedUpdateWithoutClassesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const SchoolUpdateOneRequiredWithoutClassesNestedInputObjectSchema =
  Schema;
