import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReportCreateInput> = z
  .object({
    dateCreated: z.coerce.date().optional(),
    classId: z.number(),
    userId: z.string(),
    commentId: z.number(),
    reporteeId: z.string(),
  })
  .strict();

export const ReportCreateInputObjectSchema = Schema;
