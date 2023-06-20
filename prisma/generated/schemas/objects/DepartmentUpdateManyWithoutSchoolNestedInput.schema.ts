import { z } from 'zod';
import { DepartmentCreateWithoutSchoolInputObjectSchema } from './DepartmentCreateWithoutSchoolInput.schema';
import { DepartmentUncheckedCreateWithoutSchoolInputObjectSchema } from './DepartmentUncheckedCreateWithoutSchoolInput.schema';
import { DepartmentCreateOrConnectWithoutSchoolInputObjectSchema } from './DepartmentCreateOrConnectWithoutSchoolInput.schema';
import { DepartmentUpsertWithWhereUniqueWithoutSchoolInputObjectSchema } from './DepartmentUpsertWithWhereUniqueWithoutSchoolInput.schema';
import { DepartmentCreateManySchoolInputEnvelopeObjectSchema } from './DepartmentCreateManySchoolInputEnvelope.schema';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema';
import { DepartmentUpdateWithWhereUniqueWithoutSchoolInputObjectSchema } from './DepartmentUpdateWithWhereUniqueWithoutSchoolInput.schema';
import { DepartmentUpdateManyWithWhereWithoutSchoolInputObjectSchema } from './DepartmentUpdateManyWithWhereWithoutSchoolInput.schema';
import { DepartmentScalarWhereInputObjectSchema } from './DepartmentScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentUpdateManyWithoutSchoolNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DepartmentCreateWithoutSchoolInputObjectSchema),
        z.lazy(() => DepartmentCreateWithoutSchoolInputObjectSchema).array(),
        z.lazy(() => DepartmentUncheckedCreateWithoutSchoolInputObjectSchema),
        z
          .lazy(() => DepartmentUncheckedCreateWithoutSchoolInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => DepartmentCreateOrConnectWithoutSchoolInputObjectSchema),
        z
          .lazy(() => DepartmentCreateOrConnectWithoutSchoolInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => DepartmentUpsertWithWhereUniqueWithoutSchoolInputObjectSchema,
        ),
        z
          .lazy(
            () => DepartmentUpsertWithWhereUniqueWithoutSchoolInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => DepartmentCreateManySchoolInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
        z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
        z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
        z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
        z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => DepartmentUpdateWithWhereUniqueWithoutSchoolInputObjectSchema,
        ),
        z
          .lazy(
            () => DepartmentUpdateWithWhereUniqueWithoutSchoolInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => DepartmentUpdateManyWithWhereWithoutSchoolInputObjectSchema,
        ),
        z
          .lazy(
            () => DepartmentUpdateManyWithWhereWithoutSchoolInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => DepartmentScalarWhereInputObjectSchema),
        z.lazy(() => DepartmentScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const DepartmentUpdateManyWithoutSchoolNestedInputObjectSchema = Schema;
