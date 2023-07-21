import { z } from 'zod';
import { ReportWhereInputObjectSchema } from './objects/ReportWhereInput.schema';

export const ReportDeleteManySchema = z.object({
  where: ReportWhereInputObjectSchema.optional(),
});
