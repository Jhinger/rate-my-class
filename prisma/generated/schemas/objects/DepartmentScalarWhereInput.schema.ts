import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DepartmentScalarWhereInputObjectSchema),
        z.lazy(() => DepartmentScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DepartmentScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DepartmentScalarWhereInputObjectSchema),
        z.lazy(() => DepartmentScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    avgGrade: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    schoolId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    numComments: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const DepartmentScalarWhereInputObjectSchema = Schema;
