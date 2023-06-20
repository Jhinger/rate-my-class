import { z } from 'zod';
import { ClassCreateWithoutDepartmentInputObjectSchema } from './ClassCreateWithoutDepartmentInput.schema';
import { ClassUncheckedCreateWithoutDepartmentInputObjectSchema } from './ClassUncheckedCreateWithoutDepartmentInput.schema';
import { ClassCreateOrConnectWithoutDepartmentInputObjectSchema } from './ClassCreateOrConnectWithoutDepartmentInput.schema';
import { ClassUpsertWithWhereUniqueWithoutDepartmentInputObjectSchema } from './ClassUpsertWithWhereUniqueWithoutDepartmentInput.schema';
import { ClassCreateManyDepartmentInputEnvelopeObjectSchema } from './ClassCreateManyDepartmentInputEnvelope.schema';
import { ClassWhereUniqueInputObjectSchema } from './ClassWhereUniqueInput.schema';
import { ClassUpdateWithWhereUniqueWithoutDepartmentInputObjectSchema } from './ClassUpdateWithWhereUniqueWithoutDepartmentInput.schema';
import { ClassUpdateManyWithWhereWithoutDepartmentInputObjectSchema } from './ClassUpdateManyWithWhereWithoutDepartmentInput.schema';
import { ClassScalarWhereInputObjectSchema } from './ClassScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassUncheckedUpdateManyWithoutDepartmentNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => ClassUpsertWithWhereUniqueWithoutDepartmentInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ClassUpsertWithWhereUniqueWithoutDepartmentInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ClassCreateManyDepartmentInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ClassWhereUniqueInputObjectSchema),
          z.lazy(() => ClassWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ClassWhereUniqueInputObjectSchema),
          z.lazy(() => ClassWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ClassWhereUniqueInputObjectSchema),
          z.lazy(() => ClassWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ClassWhereUniqueInputObjectSchema),
          z.lazy(() => ClassWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ClassUpdateWithWhereUniqueWithoutDepartmentInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ClassUpdateWithWhereUniqueWithoutDepartmentInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ClassUpdateManyWithWhereWithoutDepartmentInputObjectSchema,
          ),
          z
            .lazy(
              () => ClassUpdateManyWithWhereWithoutDepartmentInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ClassScalarWhereInputObjectSchema),
          z.lazy(() => ClassScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ClassUncheckedUpdateManyWithoutDepartmentNestedInputObjectSchema =
  Schema;
