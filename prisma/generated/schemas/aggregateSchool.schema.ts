import { z } from 'zod';
import { SchoolOrderByWithRelationInputObjectSchema } from './objects/SchoolOrderByWithRelationInput.schema';
import { SchoolWhereInputObjectSchema } from './objects/SchoolWhereInput.schema';
import { SchoolWhereUniqueInputObjectSchema } from './objects/SchoolWhereUniqueInput.schema';
import { SchoolCountAggregateInputObjectSchema } from './objects/SchoolCountAggregateInput.schema';
import { SchoolMinAggregateInputObjectSchema } from './objects/SchoolMinAggregateInput.schema';
import { SchoolMaxAggregateInputObjectSchema } from './objects/SchoolMaxAggregateInput.schema';
import { SchoolAvgAggregateInputObjectSchema } from './objects/SchoolAvgAggregateInput.schema';
import { SchoolSumAggregateInputObjectSchema } from './objects/SchoolSumAggregateInput.schema';

export const SchoolAggregateSchema = z.object({
  orderBy: z
    .union([
      SchoolOrderByWithRelationInputObjectSchema,
      SchoolOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SchoolWhereInputObjectSchema.optional(),
  cursor: SchoolWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), SchoolCountAggregateInputObjectSchema])
    .optional(),
  _min: SchoolMinAggregateInputObjectSchema.optional(),
  _max: SchoolMaxAggregateInputObjectSchema.optional(),
  _avg: SchoolAvgAggregateInputObjectSchema.optional(),
  _sum: SchoolSumAggregateInputObjectSchema.optional(),
});
