import { z } from 'zod';
import { ClassCreateWithoutCommentsInputObjectSchema } from './ClassCreateWithoutCommentsInput.schema';
import { ClassUncheckedCreateWithoutCommentsInputObjectSchema } from './ClassUncheckedCreateWithoutCommentsInput.schema';
import { ClassCreateOrConnectWithoutCommentsInputObjectSchema } from './ClassCreateOrConnectWithoutCommentsInput.schema';
import { ClassUpsertWithoutCommentsInputObjectSchema } from './ClassUpsertWithoutCommentsInput.schema';
import { ClassWhereUniqueInputObjectSchema } from './ClassWhereUniqueInput.schema';
import { ClassUpdateWithoutCommentsInputObjectSchema } from './ClassUpdateWithoutCommentsInput.schema';
import { ClassUncheckedUpdateWithoutCommentsInputObjectSchema } from './ClassUncheckedUpdateWithoutCommentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassUpdateOneRequiredWithoutCommentsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ClassCreateWithoutCommentsInputObjectSchema),
          z.lazy(() => ClassUncheckedCreateWithoutCommentsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ClassCreateOrConnectWithoutCommentsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ClassUpsertWithoutCommentsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ClassWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ClassUpdateWithoutCommentsInputObjectSchema),
          z.lazy(() => ClassUncheckedUpdateWithoutCommentsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ClassUpdateOneRequiredWithoutCommentsNestedInputObjectSchema =
  Schema;
