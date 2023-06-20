import { z } from 'zod';
import { DepartmentCreateWithoutClassesInputObjectSchema } from './DepartmentCreateWithoutClassesInput.schema';
import { DepartmentUncheckedCreateWithoutClassesInputObjectSchema } from './DepartmentUncheckedCreateWithoutClassesInput.schema';
import { DepartmentCreateOrConnectWithoutClassesInputObjectSchema } from './DepartmentCreateOrConnectWithoutClassesInput.schema';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentCreateNestedOneWithoutClassesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DepartmentCreateWithoutClassesInputObjectSchema),
        z.lazy(() => DepartmentUncheckedCreateWithoutClassesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => DepartmentCreateOrConnectWithoutClassesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => DepartmentWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const DepartmentCreateNestedOneWithoutClassesInputObjectSchema = Schema;
