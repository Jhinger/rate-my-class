import { z } from 'zod';
import { ClassWhereUniqueInputObjectSchema } from './ClassWhereUniqueInput.schema';
import { ClassUpdateWithoutDepartmentInputObjectSchema } from './ClassUpdateWithoutDepartmentInput.schema';
import { ClassUncheckedUpdateWithoutDepartmentInputObjectSchema } from './ClassUncheckedUpdateWithoutDepartmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassUpdateWithWhereUniqueWithoutDepartmentInput> =
  z
    .object({
      where: z.lazy(() => ClassWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ClassUpdateWithoutDepartmentInputObjectSchema),
        z.lazy(() => ClassUncheckedUpdateWithoutDepartmentInputObjectSchema),
      ]),
    })
    .strict();

export const ClassUpdateWithWhereUniqueWithoutDepartmentInputObjectSchema =
  Schema;
