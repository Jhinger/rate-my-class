import { z } from 'zod';
import { ReportWhereUniqueInputObjectSchema } from './objects/ReportWhereUniqueInput.schema';

export const ReportDeleteOneSchema = z.object({
  where: ReportWhereUniqueInputObjectSchema,
});
