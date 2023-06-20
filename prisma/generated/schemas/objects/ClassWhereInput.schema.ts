import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DepartmentRelationFilterObjectSchema } from './DepartmentRelationFilter.schema';
import { DepartmentWhereInputObjectSchema } from './DepartmentWhereInput.schema';
import { SchoolRelationFilterObjectSchema } from './SchoolRelationFilter.schema';
import { SchoolWhereInputObjectSchema } from './SchoolWhereInput.schema';
import { CommentListRelationFilterObjectSchema } from './CommentListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ClassWhereInputObjectSchema),
        z.lazy(() => ClassWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ClassWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ClassWhereInputObjectSchema),
        z.lazy(() => ClassWhereInputObjectSchema).array(),
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
    department: z
      .union([
        z.lazy(() => DepartmentRelationFilterObjectSchema),
        z.lazy(() => DepartmentWhereInputObjectSchema),
      ])
      .optional(),
    school: z
      .union([
        z.lazy(() => SchoolRelationFilterObjectSchema),
        z.lazy(() => SchoolWhereInputObjectSchema),
      ])
      .optional(),
    comments: z.lazy(() => CommentListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ClassWhereInputObjectSchema = Schema;
