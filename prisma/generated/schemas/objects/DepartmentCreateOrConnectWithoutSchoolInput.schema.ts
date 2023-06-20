import { z } from 'zod';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema';
import { DepartmentCreateWithoutSchoolInputObjectSchema } from './DepartmentCreateWithoutSchoolInput.schema';
import { DepartmentUncheckedCreateWithoutSchoolInputObjectSchema } from './DepartmentUncheckedCreateWithoutSchoolInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentCreateOrConnectWithoutSchoolInput> = z
  .object({
    where: z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DepartmentCreateWithoutSchoolInputObjectSchema),
      z.lazy(() => DepartmentUncheckedCreateWithoutSchoolInputObjectSchema),
    ]),
  })
  .strict();

export const DepartmentCreateOrConnectWithoutSchoolInputObjectSchema = Schema;
