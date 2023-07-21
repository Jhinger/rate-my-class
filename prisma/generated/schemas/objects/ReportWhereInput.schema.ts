import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReportWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ReportWhereInputObjectSchema),
        z.lazy(() => ReportWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ReportWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ReportWhereInputObjectSchema),
        z.lazy(() => ReportWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    dateCreated: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    classId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    commentId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    reporteeId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const ReportWhereInputObjectSchema = Schema;
