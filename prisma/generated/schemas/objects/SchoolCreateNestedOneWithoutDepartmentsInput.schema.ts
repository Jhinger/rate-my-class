import { z } from 'zod';
import { SchoolCreateWithoutDepartmentsInputObjectSchema } from './SchoolCreateWithoutDepartmentsInput.schema';
import { SchoolUncheckedCreateWithoutDepartmentsInputObjectSchema } from './SchoolUncheckedCreateWithoutDepartmentsInput.schema';
import { SchoolCreateOrConnectWithoutDepartmentsInputObjectSchema } from './SchoolCreateOrConnectWithoutDepartmentsInput.schema';
import { SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolCreateNestedOneWithoutDepartmentsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SchoolCreateWithoutDepartmentsInputObjectSchema),
        z.lazy(() => SchoolUncheckedCreateWithoutDepartmentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => SchoolCreateOrConnectWithoutDepartmentsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => SchoolWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const SchoolCreateNestedOneWithoutDepartmentsInputObjectSchema = Schema;
