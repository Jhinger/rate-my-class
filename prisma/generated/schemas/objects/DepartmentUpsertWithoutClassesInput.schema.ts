import { z } from 'zod';
import { DepartmentUpdateWithoutClassesInputObjectSchema } from './DepartmentUpdateWithoutClassesInput.schema';
import { DepartmentUncheckedUpdateWithoutClassesInputObjectSchema } from './DepartmentUncheckedUpdateWithoutClassesInput.schema';
import { DepartmentCreateWithoutClassesInputObjectSchema } from './DepartmentCreateWithoutClassesInput.schema';
import { DepartmentUncheckedCreateWithoutClassesInputObjectSchema } from './DepartmentUncheckedCreateWithoutClassesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentUpsertWithoutClassesInput> = z
  .object({
    update: z.union([
      z.lazy(() => DepartmentUpdateWithoutClassesInputObjectSchema),
      z.lazy(() => DepartmentUncheckedUpdateWithoutClassesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DepartmentCreateWithoutClassesInputObjectSchema),
      z.lazy(() => DepartmentUncheckedCreateWithoutClassesInputObjectSchema),
    ]),
  })
  .strict();

export const DepartmentUpsertWithoutClassesInputObjectSchema = Schema;
