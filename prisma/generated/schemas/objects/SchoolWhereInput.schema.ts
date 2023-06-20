import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DepartmentListRelationFilterObjectSchema } from './DepartmentListRelationFilter.schema';
import { ClassListRelationFilterObjectSchema } from './ClassListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SchoolWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SchoolWhereInputObjectSchema),
        z.lazy(() => SchoolWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SchoolWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SchoolWhereInputObjectSchema),
        z.lazy(() => SchoolWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    short: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    departments: z
      .lazy(() => DepartmentListRelationFilterObjectSchema)
      .optional(),
    classes: z.lazy(() => ClassListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const SchoolWhereInputObjectSchema = Schema;
