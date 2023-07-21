import { z } from 'zod';
import { ReportUpdateManyMutationInputObjectSchema } from './objects/ReportUpdateManyMutationInput.schema';
import { ReportWhereInputObjectSchema } from './objects/ReportWhereInput.schema';

export const ReportUpdateManySchema = z.object({
  data: ReportUpdateManyMutationInputObjectSchema,
  where: ReportWhereInputObjectSchema.optional(),
});
