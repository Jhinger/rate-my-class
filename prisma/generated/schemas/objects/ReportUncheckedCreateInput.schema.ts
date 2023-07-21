import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReportUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    dateCreated: z.coerce.date().optional(),
    classId: z.number(),
    userId: z.string(),
    commentId: z.number(),
    reporteeId: z.string(),
  })
  .strict();

export const ReportUncheckedCreateInputObjectSchema = Schema;
