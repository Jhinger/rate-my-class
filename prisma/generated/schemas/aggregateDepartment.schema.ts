import { z } from 'zod';
import { DepartmentOrderByWithRelationInputObjectSchema } from './objects/DepartmentOrderByWithRelationInput.schema';
import { DepartmentWhereInputObjectSchema } from './objects/DepartmentWhereInput.schema';
import { DepartmentWhereUniqueInputObjectSchema } from './objects/DepartmentWhereUniqueInput.schema';
import { DepartmentCountAggregateInputObjectSchema } from './objects/DepartmentCountAggregateInput.schema';
import { DepartmentMinAggregateInputObjectSchema } from './objects/DepartmentMinAggregateInput.schema';
import { DepartmentMaxAggregateInputObjectSchema } from './objects/DepartmentMaxAggregateInput.schema';
import { DepartmentAvgAggregateInputObjectSchema } from './objects/DepartmentAvgAggregateInput.schema';
import { DepartmentSumAggregateInputObjectSchema } from './objects/DepartmentSumAggregateInput.schema';

export const DepartmentAggregateSchema = z.object({
  orderBy: z
    .union([
      DepartmentOrderByWithRelationInputObjectSchema,
      DepartmentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DepartmentWhereInputObjectSchema.optional(),
  cursor: DepartmentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), DepartmentCountAggregateInputObjectSchema])
    .optional(),
  _min: DepartmentMinAggregateInputObjectSchema.optional(),
  _max: DepartmentMaxAggregateInputObjectSchema.optional(),
  _avg: DepartmentAvgAggregateInputObjectSchema.optional(),
  _sum: DepartmentSumAggregateInputObjectSchema.optional(),
});
