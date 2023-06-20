import { z } from 'zod';
import { ClassWhereInputObjectSchema } from './objects/ClassWhereInput.schema';
import { ClassOrderByWithAggregationInputObjectSchema } from './objects/ClassOrderByWithAggregationInput.schema';
import { ClassScalarWhereWithAggregatesInputObjectSchema } from './objects/ClassScalarWhereWithAggregatesInput.schema';
import { ClassScalarFieldEnumSchema } from './enums/ClassScalarFieldEnum.schema';

export const ClassGroupBySchema = z.object({
  where: ClassWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ClassOrderByWithAggregationInputObjectSchema,
      ClassOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ClassScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ClassScalarFieldEnumSchema),
});
