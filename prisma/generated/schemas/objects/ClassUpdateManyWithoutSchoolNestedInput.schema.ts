import { z } from 'zod';
import { ClassCreateWithoutSchoolInputObjectSchema } from './ClassCreateWithoutSchoolInput.schema';
import { ClassUncheckedCreateWithoutSchoolInputObjectSchema } from './ClassUncheckedCreateWithoutSchoolInput.schema';
import { ClassCreateOrConnectWithoutSchoolInputObjectSchema } from './ClassCreateOrConnectWithoutSchoolInput.schema';
import { ClassUpsertWithWhereUniqueWithoutSchoolInputObjectSchema } from './ClassUpsertWithWhereUniqueWithoutSchoolInput.schema';
import { ClassCreateManySchoolInputEnvelopeObjectSchema } from './ClassCreateManySchoolInputEnvelope.schema';
import { ClassWhereUniqueInputObjectSchema } from './ClassWhereUniqueInput.schema';
import { ClassUpdateWithWhereUniqueWithoutSchoolInputObjectSchema } from './ClassUpdateWithWhereUniqueWithoutSchoolInput.schema';
import { ClassUpdateManyWithWhereWithoutSchoolInputObjectSchema } from './ClassUpdateManyWithWhereWithoutSchoolInput.schema';
import { ClassScalarWhereInputObjectSchema } from './ClassScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassUpdateManyWithoutSchoolNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ClassCreateWithoutSchoolInputObjectSchema),
        z.lazy(() => ClassCreateWithoutSchoolInputObjectSchema).array(),
        z.lazy(() => ClassUncheckedCreateWithoutSchoolInputObjectSchema),
        z
          .lazy(() => ClassUncheckedCreateWithoutSchoolInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ClassCreateOrConnectWithoutSchoolInputObjectSchema),
        z
          .lazy(() => ClassCreateOrConnectWithoutSchoolInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ClassUpsertWithWhereUniqueWithoutSchoolInputObjectSchema),
        z
          .lazy(() => ClassUpsertWithWhereUniqueWithoutSchoolInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ClassCreateManySchoolInputEnvelopeObjectSchema)
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
        z.lazy(() => ClassUpdateWithWhereUniqueWithoutSchoolInputObjectSchema),
        z
          .lazy(() => ClassUpdateWithWhereUniqueWithoutSchoolInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ClassUpdateManyWithWhereWithoutSchoolInputObjectSchema),
        z
          .lazy(() => ClassUpdateManyWithWhereWithoutSchoolInputObjectSchema)
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

export const ClassUpdateManyWithoutSchoolNestedInputObjectSchema = Schema;
