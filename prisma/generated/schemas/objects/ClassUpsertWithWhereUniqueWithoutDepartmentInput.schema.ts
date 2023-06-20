import { z } from 'zod';
import { ClassWhereUniqueInputObjectSchema } from './ClassWhereUniqueInput.schema';
import { ClassUpdateWithoutDepartmentInputObjectSchema } from './ClassUpdateWithoutDepartmentInput.schema';
import { ClassUncheckedUpdateWithoutDepartmentInputObjectSchema } from './ClassUncheckedUpdateWithoutDepartmentInput.schema';
import { ClassCreateWithoutDepartmentInputObjectSchema } from './ClassCreateWithoutDepartmentInput.schema';
import { ClassUncheckedCreateWithoutDepartmentInputObjectSchema } from './ClassUncheckedCreateWithoutDepartmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassUpsertWithWhereUniqueWithoutDepartmentInput> =
  z
    .object({
      where: z.lazy(() => ClassWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ClassUpdateWithoutDepartmentInputObjectSchema),
        z.lazy(() => ClassUncheckedUpdateWithoutDepartmentInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ClassCreateWithoutDepartmentInputObjectSchema),
        z.lazy(() => ClassUncheckedCreateWithoutDepartmentInputObjectSchema),
      ]),
    })
    .strict();

export const ClassUpsertWithWhereUniqueWithoutDepartmentInputObjectSchema =
  Schema;
