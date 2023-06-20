import { z } from 'zod';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema';
import { DepartmentUpdateWithoutSchoolInputObjectSchema } from './DepartmentUpdateWithoutSchoolInput.schema';
import { DepartmentUncheckedUpdateWithoutSchoolInputObjectSchema } from './DepartmentUncheckedUpdateWithoutSchoolInput.schema';
import { DepartmentCreateWithoutSchoolInputObjectSchema } from './DepartmentCreateWithoutSchoolInput.schema';
import { DepartmentUncheckedCreateWithoutSchoolInputObjectSchema } from './DepartmentUncheckedCreateWithoutSchoolInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentUpsertWithWhereUniqueWithoutSchoolInput> =
  z
    .object({
      where: z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DepartmentUpdateWithoutSchoolInputObjectSchema),
        z.lazy(() => DepartmentUncheckedUpdateWithoutSchoolInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => DepartmentCreateWithoutSchoolInputObjectSchema),
        z.lazy(() => DepartmentUncheckedCreateWithoutSchoolInputObjectSchema),
      ]),
    })
    .strict();

export const DepartmentUpsertWithWhereUniqueWithoutSchoolInputObjectSchema =
  Schema;
