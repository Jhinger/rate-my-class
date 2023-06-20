import { z } from 'zod';
import { CommentUncheckedCreateNestedManyWithoutClassInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutClassInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClassUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    schoolId: z.number(),
    name: z.string(),
    avgDifficulty: z.number().optional().nullable(),
    avgGrade: z.number().optional().nullable(),
    numComments: z.number().optional(),
    avgBooster: z.number().optional().nullable(),
    departmentId: z.number(),
    avgWorkload: z.number().optional().nullable(),
    avgRecommended: z.number().optional().nullable(),
    comments: z
      .lazy(() => CommentUncheckedCreateNestedManyWithoutClassInputObjectSchema)
      .optional(),
  })
  .strict();

export const ClassUncheckedCreateInputObjectSchema = Schema;
