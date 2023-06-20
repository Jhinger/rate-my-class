import { z } from 'zod';
import { SchoolCreateWithoutDepartmentsInputObjectSchema } from './SchoolCreateWithoutDepartmentsInput.schema';
import { SchoolUncheckedCreateWithoutDepartmentsInputObjectSchema } from './SchoolUncheckedCreateWithoutDepartmentsInput.schema';
import { SchoolCreateOrConnectWithoutDepartmentsInputObjectSchema } from './SchoolCreateOrConnectWithoutDepartmentsInput.schema';
import { SchoolUpsertWithoutDepartmentsInputObjectSchema } from './SchoolUpsertWithoutDepartmentsInput.schema';
import { SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema';
import { SchoolUpdateWithoutDepartmentsInputObjectSchema } from './SchoolUpdateWithoutDepartmentsInput.schema';
import { SchoolUncheckedUpdateWithoutDepartmentsInputObjectSchema } from './SchoolUncheckedUpdateWithoutDepartmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolUpdateOneRequiredWithoutDepartmentsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SchoolCreateWithoutDepartmentsInputObjectSchema),
          z.lazy(
            () => SchoolUncheckedCreateWithoutDepartmentsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SchoolCreateOrConnectWithoutDepartmentsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => SchoolUpsertWithoutDepartmentsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => SchoolWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => SchoolUpdateWithoutDepartmentsInputObjectSchema),
          z.lazy(
            () => SchoolUncheckedUpdateWithoutDepartmentsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const SchoolUpdateOneRequiredWithoutDepartmentsNestedInputObjectSchema =
  Schema;
