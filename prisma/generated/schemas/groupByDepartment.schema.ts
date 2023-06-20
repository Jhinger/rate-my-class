import { z } from 'zod';
import { DepartmentWhereInputObjectSchema } from './objects/DepartmentWhereInput.schema';
import { DepartmentOrderByWithAggregationInputObjectSchema } from './objects/DepartmentOrderByWithAggregationInput.schema';
import { DepartmentScalarWhereWithAggregatesInputObjectSchema } from './objects/DepartmentScalarWhereWithAggregatesInput.schema';
import { DepartmentScalarFieldEnumSchema } from './enums/DepartmentScalarFieldEnum.schema';

export const DepartmentGroupBySchema = z.object({
  where: DepartmentWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DepartmentOrderByWithAggregationInputObjectSchema,
      DepartmentOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: DepartmentScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DepartmentScalarFieldEnumSchema),
});
