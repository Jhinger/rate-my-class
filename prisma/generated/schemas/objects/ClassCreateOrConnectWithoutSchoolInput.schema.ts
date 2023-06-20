import { z } from 'zod';
import { ClassWhereUniqueInputObjectSchema } from './ClassWhereUniqueInput.schema';
import { ClassCreateWithoutSchoolInputObjectSchema } from './ClassCreateWithoutSchoolInput.schema';
import { ClassUncheckedCreateWithoutSchoolInputObjectSchema } from './ClassUncheckedCreateWithoutSchoolInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassCreateOrConnectWithoutSchoolInput> = z
  .object({
    where: z.lazy(() => ClassWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ClassCreateWithoutSchoolInputObjectSchema),
      z.lazy(() => ClassUncheckedCreateWithoutSchoolInputObjectSchema),
    ]),
  })
  .strict();

export const ClassCreateOrConnectWithoutSchoolInputObjectSchema = Schema;
