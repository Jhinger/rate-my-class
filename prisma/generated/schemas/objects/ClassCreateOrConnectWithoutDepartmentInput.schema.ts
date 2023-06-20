import { z } from 'zod';
import { ClassWhereUniqueInputObjectSchema } from './ClassWhereUniqueInput.schema';
import { ClassCreateWithoutDepartmentInputObjectSchema } from './ClassCreateWithoutDepartmentInput.schema';
import { ClassUncheckedCreateWithoutDepartmentInputObjectSchema } from './ClassUncheckedCreateWithoutDepartmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassCreateOrConnectWithoutDepartmentInput> = z
  .object({
    where: z.lazy(() => ClassWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ClassCreateWithoutDepartmentInputObjectSchema),
      z.lazy(() => ClassUncheckedCreateWithoutDepartmentInputObjectSchema),
    ]),
  })
  .strict();

export const ClassCreateOrConnectWithoutDepartmentInputObjectSchema = Schema;
