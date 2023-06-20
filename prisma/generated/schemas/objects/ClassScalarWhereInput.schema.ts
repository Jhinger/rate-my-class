import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ClassScalarWhereInputObjectSchema),
        z.lazy(() => ClassScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ClassScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ClassScalarWhereInputObjectSchema),
        z.lazy(() => ClassScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    schoolId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    avgDifficulty: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    avgGrade: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    numComments: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    avgBooster: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    departmentId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    avgWorkload: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    avgRecommended: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict();

export const ClassScalarWhereInputObjectSchema = Schema;
