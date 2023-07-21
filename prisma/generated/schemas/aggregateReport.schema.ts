import { z } from 'zod';
import { ReportOrderByWithRelationInputObjectSchema } from './objects/ReportOrderByWithRelationInput.schema';
import { ReportWhereInputObjectSchema } from './objects/ReportWhereInput.schema';
import { ReportWhereUniqueInputObjectSchema } from './objects/ReportWhereUniqueInput.schema';
import { ReportCountAggregateInputObjectSchema } from './objects/ReportCountAggregateInput.schema';
import { ReportMinAggregateInputObjectSchema } from './objects/ReportMinAggregateInput.schema';
import { ReportMaxAggregateInputObjectSchema } from './objects/ReportMaxAggregateInput.schema';
import { ReportAvgAggregateInputObjectSchema } from './objects/ReportAvgAggregateInput.schema';
import { ReportSumAggregateInputObjectSchema } from './objects/ReportSumAggregateInput.schema';

export const ReportAggregateSchema = z.object({
  orderBy: z
    .union([
      ReportOrderByWithRelationInputObjectSchema,
      ReportOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ReportWhereInputObjectSchema.optional(),
  cursor: ReportWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ReportCountAggregateInputObjectSchema])
    .optional(),
  _min: ReportMinAggregateInputObjectSchema.optional(),
  _max: ReportMaxAggregateInputObjectSchema.optional(),
  _avg: ReportAvgAggregateInputObjectSchema.optional(),
  _sum: ReportSumAggregateInputObjectSchema.optional(),
});
