import { z } from 'zod';
import { ReportUpdateInputObjectSchema } from './objects/ReportUpdateInput.schema';
import { ReportUncheckedUpdateInputObjectSchema } from './objects/ReportUncheckedUpdateInput.schema';
import { ReportWhereUniqueInputObjectSchema } from './objects/ReportWhereUniqueInput.schema';

export const ReportUpdateOneSchema = z.object({
  data: z.union([
    ReportUpdateInputObjectSchema,
    ReportUncheckedUpdateInputObjectSchema,
  ]),
  where: ReportWhereUniqueInputObjectSchema,
});
