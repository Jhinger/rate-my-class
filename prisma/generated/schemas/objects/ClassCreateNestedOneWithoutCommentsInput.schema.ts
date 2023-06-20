import { z } from 'zod';
import { ClassCreateWithoutCommentsInputObjectSchema } from './ClassCreateWithoutCommentsInput.schema';
import { ClassUncheckedCreateWithoutCommentsInputObjectSchema } from './ClassUncheckedCreateWithoutCommentsInput.schema';
import { ClassCreateOrConnectWithoutCommentsInputObjectSchema } from './ClassCreateOrConnectWithoutCommentsInput.schema';
import { ClassWhereUniqueInputObjectSchema } from './ClassWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassCreateNestedOneWithoutCommentsInput> = z
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
    connect: z.lazy(() => ClassWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ClassCreateNestedOneWithoutCommentsInputObjectSchema = Schema;
