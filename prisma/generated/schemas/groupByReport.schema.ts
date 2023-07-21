import { z } from 'zod';
import { ReportWhereInputObjectSchema } from './objects/ReportWhereInput.schema';
import { ReportOrderByWithAggregationInputObjectSchema } from './objects/ReportOrderByWithAggregationInput.schema';
import { ReportScalarWhereWithAggregatesInputObjectSchema } from './objects/ReportScalarWhereWithAggregatesInput.schema';
import { ReportScalarFieldEnumSchema } from './enums/ReportScalarFieldEnum.schema';

export const ReportGroupBySchema = z.object({
  where: ReportWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ReportOrderByWithAggregationInputObjectSchema,
      ReportOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ReportScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ReportScalarFieldEnumSchema),
});
