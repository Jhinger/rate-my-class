import { z } from 'zod';
import { ClassOrderByWithRelationInputObjectSchema } from './objects/ClassOrderByWithRelationInput.schema';
import { ClassWhereInputObjectSchema } from './objects/ClassWhereInput.schema';
import { ClassWhereUniqueInputObjectSchema } from './objects/ClassWhereUniqueInput.schema';
import { ClassScalarFieldEnumSchema } from './enums/ClassScalarFieldEnum.schema';

export const ClassFindManySchema = z.object({
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
  distinct: z.array(ClassScalarFieldEnumSchema).optional(),
});
