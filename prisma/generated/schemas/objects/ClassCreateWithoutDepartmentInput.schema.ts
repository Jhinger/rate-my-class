import { z } from 'zod';
import { SchoolCreateNestedOneWithoutClassesInputObjectSchema } from './SchoolCreateNestedOneWithoutClassesInput.schema';
import { CommentCreateNestedManyWithoutClassInputObjectSchema } from './CommentCreateNestedManyWithoutClassInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassCreateWithoutDepartmentInput> = z
  .object({
    name: z.string(),
    avgDifficulty: z.number().optional().nullable(),
    avgGrade: z.number().optional().nullable(),
    numComments: z.number().optional(),
    avgBooster: z.number().optional().nullable(),
    avgWorkload: z.number().optional().nullable(),
    avgRecommended: z.number().optional().nullable(),
    school: z.lazy(() => SchoolCreateNestedOneWithoutClassesInputObjectSchema),
    comments: z
      .lazy(() => CommentCreateNestedManyWithoutClassInputObjectSchema)
      .optional(),
  })
  .strict();

export const ClassCreateWithoutDepartmentInputObjectSchema = Schema;
