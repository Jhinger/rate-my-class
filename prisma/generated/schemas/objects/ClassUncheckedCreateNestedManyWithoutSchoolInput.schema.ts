import { z } from 'zod';
import { ClassCreateWithoutSchoolInputObjectSchema } from './ClassCreateWithoutSchoolInput.schema';
import { ClassUncheckedCreateWithoutSchoolInputObjectSchema } from './ClassUncheckedCreateWithoutSchoolInput.schema';
import { ClassCreateOrConnectWithoutSchoolInputObjectSchema } from './ClassCreateOrConnectWithoutSchoolInput.schema';
import { ClassCreateManySchoolInputEnvelopeObjectSchema } from './ClassCreateManySchoolInputEnvelope.schema';
import { ClassWhereUniqueInputObjectSchema } from './ClassWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassUncheckedCreateNestedManyWithoutSchoolInput> =
  z
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
      createMany: z
        .lazy(() => ClassCreateManySchoolInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ClassWhereUniqueInputObjectSchema),
          z.lazy(() => ClassWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ClassUncheckedCreateNestedManyWithoutSchoolInputObjectSchema =
  Schema;
