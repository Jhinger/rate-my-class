import { z } from 'zod';
import { SchoolOrderByWithRelationInputObjectSchema } from './objects/SchoolOrderByWithRelationInput.schema';
import { SchoolWhereInputObjectSchema } from './objects/SchoolWhereInput.schema';
import { SchoolWhereUniqueInputObjectSchema } from './objects/SchoolWhereUniqueInput.schema';
import { SchoolScalarFieldEnumSchema } from './enums/SchoolScalarFieldEnum.schema';

export const SchoolFindManySchema = z.object({
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
  distinct: z.array(SchoolScalarFieldEnumSchema).optional(),
});
