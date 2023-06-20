import { z } from 'zod';
import { CommentOrderByWithRelationInputObjectSchema } from './objects/CommentOrderByWithRelationInput.schema';
import { CommentWhereInputObjectSchema } from './objects/CommentWhereInput.schema';
import { CommentWhereUniqueInputObjectSchema } from './objects/CommentWhereUniqueInput.schema';
import { CommentCountAggregateInputObjectSchema } from './objects/CommentCountAggregateInput.schema';
import { CommentMinAggregateInputObjectSchema } from './objects/CommentMinAggregateInput.schema';
import { CommentMaxAggregateInputObjectSchema } from './objects/CommentMaxAggregateInput.schema';
import { CommentAvgAggregateInputObjectSchema } from './objects/CommentAvgAggregateInput.schema';
import { CommentSumAggregateInputObjectSchema } from './objects/CommentSumAggregateInput.schema';

export const CommentAggregateSchema = z.object({
  orderBy: z
    .union([
      CommentOrderByWithRelationInputObjectSchema,
      CommentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CommentWhereInputObjectSchema.optional(),
  cursor: CommentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), CommentCountAggregateInputObjectSchema])
    .optional(),
  _min: CommentMinAggregateInputObjectSchema.optional(),
  _max: CommentMaxAggregateInputObjectSchema.optional(),
  _avg: CommentAvgAggregateInputObjectSchema.optional(),
  _sum: CommentSumAggregateInputObjectSchema.optional(),
});
