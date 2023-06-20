import { z } from 'zod';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema';
import { DepartmentUpdateWithoutSchoolInputObjectSchema } from './DepartmentUpdateWithoutSchoolInput.schema';
import { DepartmentUncheckedUpdateWithoutSchoolInputObjectSchema } from './DepartmentUncheckedUpdateWithoutSchoolInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentUpdateWithWhereUniqueWithoutSchoolInput> =
  z
    .object({
      where: z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DepartmentUpdateWithoutSchoolInputObjectSchema),
        z.lazy(() => DepartmentUncheckedUpdateWithoutSchoolInputObjectSchema),
      ]),
    })
    .strict();

export const DepartmentUpdateWithWhereUniqueWithoutSchoolInputObjectSchema =
  Schema;
