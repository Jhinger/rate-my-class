import { z } from 'zod';
import { DepartmentCreateNestedOneWithoutClassesInputObjectSchema } from './DepartmentCreateNestedOneWithoutClassesInput.schema';
import { SchoolCreateNestedOneWithoutClassesInputObjectSchema } from './SchoolCreateNestedOneWithoutClassesInput.schema';
import { CommentCreateNestedManyWithoutClassInputObjectSchema } from './CommentCreateNestedManyWithoutClassInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassCreateInput> = z
  .object({
    name: z.string(),
    avgDifficulty: z.number().optional().nullable(),
    avgGrade: z.number().optional().nullable(),
    numComments: z.number().optional(),
    avgBooster: z.number().optional().nullable(),
    avgWorkload: z.number().optional().nullable(),
    avgRecommended: z.number().optional().nullable(),
    department: z.lazy(
      () => DepartmentCreateNestedOneWithoutClassesInputObjectSchema,
    ),
    school: z.lazy(() => SchoolCreateNestedOneWithoutClassesInputObjectSchema),
    comments: z
      .lazy(() => CommentCreateNestedManyWithoutClassInputObjectSchema)
      .optional(),
  })
  .strict();

export const ClassCreateInputObjectSchema = Schema;
