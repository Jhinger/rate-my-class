import { z } from 'zod';
import { ClassWhereUniqueInputObjectSchema } from './ClassWhereUniqueInput.schema';
import { ClassCreateWithoutCommentsInputObjectSchema } from './ClassCreateWithoutCommentsInput.schema';
import { ClassUncheckedCreateWithoutCommentsInputObjectSchema } from './ClassUncheckedCreateWithoutCommentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassCreateOrConnectWithoutCommentsInput> = z
  .object({
    where: z.lazy(() => ClassWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ClassCreateWithoutCommentsInputObjectSchema),
      z.lazy(() => ClassUncheckedCreateWithoutCommentsInputObjectSchema),
    ]),
  })
  .strict();

export const ClassCreateOrConnectWithoutCommentsInputObjectSchema = Schema;
