import { z } from 'zod';
import { DepartmentOrderByWithRelationInputObjectSchema } from './objects/DepartmentOrderByWithRelationInput.schema';
import { DepartmentWhereInputObjectSchema } from './objects/DepartmentWhereInput.schema';
import { DepartmentWhereUniqueInputObjectSchema } from './objects/DepartmentWhereUniqueInput.schema';
import { DepartmentScalarFieldEnumSchema } from './enums/DepartmentScalarFieldEnum.schema';

export const DepartmentFindFirstSchema = z.object({
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
  distinct: z.array(DepartmentScalarFieldEnumSchema).optional(),
});
