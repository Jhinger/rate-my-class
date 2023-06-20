import { z } from 'zod';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema';
import { DepartmentCreateWithoutClassesInputObjectSchema } from './DepartmentCreateWithoutClassesInput.schema';
import { DepartmentUncheckedCreateWithoutClassesInputObjectSchema } from './DepartmentUncheckedCreateWithoutClassesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentCreateOrConnectWithoutClassesInput> = z
  .object({
    where: z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DepartmentCreateWithoutClassesInputObjectSchema),
      z.lazy(() => DepartmentUncheckedCreateWithoutClassesInputObjectSchema),
    ]),
  })
  .strict();

export const DepartmentCreateOrConnectWithoutClassesInputObjectSchema = Schema;
