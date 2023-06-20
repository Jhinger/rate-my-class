import { z } from 'zod';
import { SchoolUpdateWithoutDepartmentsInputObjectSchema } from './SchoolUpdateWithoutDepartmentsInput.schema';
import { SchoolUncheckedUpdateWithoutDepartmentsInputObjectSchema } from './SchoolUncheckedUpdateWithoutDepartmentsInput.schema';
import { SchoolCreateWithoutDepartmentsInputObjectSchema } from './SchoolCreateWithoutDepartmentsInput.schema';
import { SchoolUncheckedCreateWithoutDepartmentsInputObjectSchema } from './SchoolUncheckedCreateWithoutDepartmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolUpsertWithoutDepartmentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => SchoolUpdateWithoutDepartmentsInputObjectSchema),
      z.lazy(() => SchoolUncheckedUpdateWithoutDepartmentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SchoolCreateWithoutDepartmentsInputObjectSchema),
      z.lazy(() => SchoolUncheckedCreateWithoutDepartmentsInputObjectSchema),
    ]),
  })
  .strict();

export const SchoolUpsertWithoutDepartmentsInputObjectSchema = Schema;
