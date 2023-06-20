import { z } from 'zod';
import { ClassWhereUniqueInputObjectSchema } from './ClassWhereUniqueInput.schema';
import { ClassUpdateWithoutSchoolInputObjectSchema } from './ClassUpdateWithoutSchoolInput.schema';
import { ClassUncheckedUpdateWithoutSchoolInputObjectSchema } from './ClassUncheckedUpdateWithoutSchoolInput.schema';
import { ClassCreateWithoutSchoolInputObjectSchema } from './ClassCreateWithoutSchoolInput.schema';
import { ClassUncheckedCreateWithoutSchoolInputObjectSchema } from './ClassUncheckedCreateWithoutSchoolInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassUpsertWithWhereUniqueWithoutSchoolInput> = z
  .object({
    where: z.lazy(() => ClassWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ClassUpdateWithoutSchoolInputObjectSchema),
      z.lazy(() => ClassUncheckedUpdateWithoutSchoolInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ClassCreateWithoutSchoolInputObjectSchema),
      z.lazy(() => ClassUncheckedCreateWithoutSchoolInputObjectSchema),
    ]),
  })
  .strict();

export const ClassUpsertWithWhereUniqueWithoutSchoolInputObjectSchema = Schema;
