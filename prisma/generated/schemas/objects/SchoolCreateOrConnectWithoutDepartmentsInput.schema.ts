import { z } from 'zod';
import { SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema';
import { SchoolCreateWithoutDepartmentsInputObjectSchema } from './SchoolCreateWithoutDepartmentsInput.schema';
import { SchoolUncheckedCreateWithoutDepartmentsInputObjectSchema } from './SchoolUncheckedCreateWithoutDepartmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolCreateOrConnectWithoutDepartmentsInput> = z
  .object({
    where: z.lazy(() => SchoolWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SchoolCreateWithoutDepartmentsInputObjectSchema),
      z.lazy(() => SchoolUncheckedCreateWithoutDepartmentsInputObjectSchema),
    ]),
  })
  .strict();

export const SchoolCreateOrConnectWithoutDepartmentsInputObjectSchema = Schema;
