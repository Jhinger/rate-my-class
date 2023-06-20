import { z } from 'zod';
import { SchoolWhereInputObjectSchema } from './objects/SchoolWhereInput.schema';
import { SchoolOrderByWithAggregationInputObjectSchema } from './objects/SchoolOrderByWithAggregationInput.schema';
import { SchoolScalarWhereWithAggregatesInputObjectSchema } from './objects/SchoolScalarWhereWithAggregatesInput.schema';
import { SchoolScalarFieldEnumSchema } from './enums/SchoolScalarFieldEnum.schema';

export const SchoolGroupBySchema = z.object({
  where: SchoolWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      SchoolOrderByWithAggregationInputObjectSchema,
      SchoolOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: SchoolScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SchoolScalarFieldEnumSchema),
});
