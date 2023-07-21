import { z } from 'zod';
import { ReportCreateManyInputObjectSchema } from './objects/ReportCreateManyInput.schema';

export const ReportCreateManySchema = z.object({
  data: z.union([
    ReportCreateManyInputObjectSchema,
    z.array(ReportCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
