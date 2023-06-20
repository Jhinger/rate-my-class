import { z } from 'zod';
import { ClassScalarWhereInputObjectSchema } from './ClassScalarWhereInput.schema';
import { ClassUpdateManyMutationInputObjectSchema } from './ClassUpdateManyMutationInput.schema';
import { ClassUncheckedUpdateManyWithoutClassesInputObjectSchema } from './ClassUncheckedUpdateManyWithoutClassesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassUpdateManyWithWhereWithoutDepartmentInput> =
  z
    .object({
      where: z.lazy(() => ClassScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ClassUpdateManyMutationInputObjectSchema),
        z.lazy(() => ClassUncheckedUpdateManyWithoutClassesInputObjectSchema),
      ]),
    })
    .strict();

export const ClassUpdateManyWithWhereWithoutDepartmentInputObjectSchema =
  Schema;
