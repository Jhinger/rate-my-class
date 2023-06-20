import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { SchoolRelationFilterObjectSchema } from './SchoolRelationFilter.schema';
import { SchoolWhereInputObjectSchema } from './SchoolWhereInput.schema';
import { ClassListRelationFilterObjectSchema } from './ClassListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DepartmentWhereInputObjectSchema),
        z.lazy(() => DepartmentWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DepartmentWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DepartmentWhereInputObjectSchema),
        z.lazy(() => DepartmentWhereInputObjectSchema).array(),
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
    school: z
      .union([
        z.lazy(() => SchoolRelationFilterObjectSchema),
        z.lazy(() => SchoolWhereInputObjectSchema),
      ])
      .optional(),
    classes: z.lazy(() => ClassListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const DepartmentWhereInputObjectSchema = Schema;
