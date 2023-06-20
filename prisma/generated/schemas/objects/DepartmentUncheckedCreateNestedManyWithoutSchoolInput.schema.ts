import { z } from 'zod';
import { DepartmentCreateWithoutSchoolInputObjectSchema } from './DepartmentCreateWithoutSchoolInput.schema';
import { DepartmentUncheckedCreateWithoutSchoolInputObjectSchema } from './DepartmentUncheckedCreateWithoutSchoolInput.schema';
import { DepartmentCreateOrConnectWithoutSchoolInputObjectSchema } from './DepartmentCreateOrConnectWithoutSchoolInput.schema';
import { DepartmentCreateManySchoolInputEnvelopeObjectSchema } from './DepartmentCreateManySchoolInputEnvelope.schema';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentUncheckedCreateNestedManyWithoutSchoolInput> =
  z
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
      createMany: z
        .lazy(() => DepartmentCreateManySchoolInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
          z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DepartmentUncheckedCreateNestedManyWithoutSchoolInputObjectSchema =
  Schema;
