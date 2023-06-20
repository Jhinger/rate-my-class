import { z } from 'zod';
import { ClassOrderByWithRelationInputObjectSchema } from './objects/ClassOrderByWithRelationInput.schema';
import { ClassWhereInputObjectSchema } from './objects/ClassWhereInput.schema';
import { ClassWhereUniqueInputObjectSchema } from './objects/ClassWhereUniqueInput.schema';
import { ClassCountAggregateInputObjectSchema } from './objects/ClassCountAggregateInput.schema';
import { ClassMinAggregateInputObjectSchema } from './objects/ClassMinAggregateInput.schema';
import { ClassMaxAggregateInputObjectSchema } from './objects/ClassMaxAggregateInput.schema';
import { ClassAvgAggregateInputObjectSchema } from './objects/ClassAvgAggregateInput.schema';
import { ClassSumAggregateInputObjectSchema } from './objects/ClassSumAggregateInput.schema';

export const ClassAggregateSchema = z.object({
  orderBy: z
    .union([
      ClassOrderByWithRelationInputObjectSchema,
      ClassOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ClassWhereInputObjectSchema.optional(),
  cursor: ClassWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ClassCountAggregateInputObjectSchema])
    .optional(),
  _min: ClassMinAggregateInputObjectSchema.optional(),
  _max: ClassMaxAggregateInputObjectSchema.optional(),
  _avg: ClassAvgAggregateInputObjectSchema.optional(),
  _sum: ClassSumAggregateInputObjectSchema.optional(),
});
