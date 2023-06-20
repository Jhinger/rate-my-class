import { z } from 'zod';
import { ClassUpdateWithoutCommentsInputObjectSchema } from './ClassUpdateWithoutCommentsInput.schema';
import { ClassUncheckedUpdateWithoutCommentsInputObjectSchema } from './ClassUncheckedUpdateWithoutCommentsInput.schema';
import { ClassCreateWithoutCommentsInputObjectSchema } from './ClassCreateWithoutCommentsInput.schema';
import { ClassUncheckedCreateWithoutCommentsInputObjectSchema } from './ClassUncheckedCreateWithoutCommentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassUpsertWithoutCommentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ClassUpdateWithoutCommentsInputObjectSchema),
      z.lazy(() => ClassUncheckedUpdateWithoutCommentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ClassCreateWithoutCommentsInputObjectSchema),
      z.lazy(() => ClassUncheckedCreateWithoutCommentsInputObjectSchema),
    ]),
  })
  .strict();

export const ClassUpsertWithoutCommentsInputObjectSchema = Schema;
