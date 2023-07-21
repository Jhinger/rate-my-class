import { z } from 'zod';
import { ReportCreateInputObjectSchema } from './objects/ReportCreateInput.schema';
import { ReportUncheckedCreateInputObjectSchema } from './objects/ReportUncheckedCreateInput.schema';

export const ReportCreateOneSchema = z.object({
  data: z.union([
    ReportCreateInputObjectSchema,
    ReportUncheckedCreateInputObjectSchema,
  ]),
});
