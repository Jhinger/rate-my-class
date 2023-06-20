import { z } from 'zod';
import { ClassCreateWithoutDepartmentInputObjectSchema } from './ClassCreateWithoutDepartmentInput.schema';
import { ClassUncheckedCreateWithoutDepartmentInputObjectSchema } from './ClassUncheckedCreateWithoutDepartmentInput.schema';
import { ClassCreateOrConnectWithoutDepartmentInputObjectSchema } from './ClassCreateOrConnectWithoutDepartmentInput.schema';
import { ClassCreateManyDepartmentInputEnvelopeObjectSchema } from './ClassCreateManyDepartmentInputEnvelope.schema';
import { ClassWhereUniqueInputObjectSchema } from './ClassWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassUncheckedCreateNestedManyWithoutDepartmentInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ClassCreateWithoutDepartmentInputObjectSchema),
          z.lazy(() => ClassCreateWithoutDepartmentInputObjectSchema).array(),
          z.lazy(() => ClassUncheckedCreateWithoutDepartmentInputObjectSchema),
          z
            .lazy(() => ClassUncheckedCreateWithoutDepartmentInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ClassCreateOrConnectWithoutDepartmentInputObjectSchema),
          z
            .lazy(() => ClassCreateOrConnectWithoutDepartmentInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ClassCreateManyDepartmentInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ClassWhereUniqueInputObjectSchema),
          z.lazy(() => ClassWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ClassUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema =
  Schema;
