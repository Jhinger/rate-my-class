import { z } from 'zod';
import { ReportWhereUniqueInputObjectSchema } from './objects/ReportWhereUniqueInput.schema';

export const ReportFindUniqueSchema = z.object({
  where: ReportWhereUniqueInputObjectSchema,
});
