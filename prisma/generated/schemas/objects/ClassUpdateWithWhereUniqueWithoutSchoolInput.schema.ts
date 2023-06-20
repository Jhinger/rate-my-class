import { z } from 'zod';
import { ClassWhereUniqueInputObjectSchema } from './ClassWhereUniqueInput.schema';
import { ClassUpdateWithoutSchoolInputObjectSchema } from './ClassUpdateWithoutSchoolInput.schema';
import { ClassUncheckedUpdateWithoutSchoolInputObjectSchema } from './ClassUncheckedUpdateWithoutSchoolInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassUpdateWithWhereUniqueWithoutSchoolInput> = z
  .object({
    where: z.lazy(() => ClassWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ClassUpdateWithoutSchoolInputObjectSchema),
      z.lazy(() => ClassUncheckedUpdateWithoutSchoolInputObjectSchema),
    ]),
  })
  .strict();

export const ClassUpdateWithWhereUniqueWithoutSchoolInputObjectSchema = Schema;
