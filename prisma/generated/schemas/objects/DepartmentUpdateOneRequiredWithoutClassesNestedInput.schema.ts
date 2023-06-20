import { z } from 'zod';
import { DepartmentCreateWithoutClassesInputObjectSchema } from './DepartmentCreateWithoutClassesInput.schema';
import { DepartmentUncheckedCreateWithoutClassesInputObjectSchema } from './DepartmentUncheckedCreateWithoutClassesInput.schema';
import { DepartmentCreateOrConnectWithoutClassesInputObjectSchema } from './DepartmentCreateOrConnectWithoutClassesInput.schema';
import { DepartmentUpsertWithoutClassesInputObjectSchema } from './DepartmentUpsertWithoutClassesInput.schema';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema';
import { DepartmentUpdateWithoutClassesInputObjectSchema } from './DepartmentUpdateWithoutClassesInput.schema';
import { DepartmentUncheckedUpdateWithoutClassesInputObjectSchema } from './DepartmentUncheckedUpdateWithoutClassesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentUpdateOneRequiredWithoutClassesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DepartmentCreateWithoutClassesInputObjectSchema),
          z.lazy(
            () => DepartmentUncheckedCreateWithoutClassesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => DepartmentCreateOrConnectWithoutClassesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => DepartmentUpsertWithoutClassesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => DepartmentWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => DepartmentUpdateWithoutClassesInputObjectSchema),
          z.lazy(
            () => DepartmentUncheckedUpdateWithoutClassesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const DepartmentUpdateOneRequiredWithoutClassesNestedInputObjectSchema =
  Schema;
