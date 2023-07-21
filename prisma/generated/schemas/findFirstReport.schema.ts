import { z } from 'zod';
import { ReportOrderByWithRelationInputObjectSchema } from './objects/ReportOrderByWithRelationInput.schema';
import { ReportWhereInputObjectSchema } from './objects/ReportWhereInput.schema';
import { ReportWhereUniqueInputObjectSchema } from './objects/ReportWhereUniqueInput.schema';
import { ReportScalarFieldEnumSchema } from './enums/ReportScalarFieldEnum.schema';

export const ReportFindFirstSchema = z.object({
  orderBy: z
    .union([
      ReportOrderByWithRelationInputObjectSchema,
      ReportOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ReportWhereInputObjectSchema.optional(),
  cursor: ReportWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ReportScalarFieldEnumSchema).optional(),
});
