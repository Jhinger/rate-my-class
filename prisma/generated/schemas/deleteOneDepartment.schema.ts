import { z } from 'zod';
import { DepartmentWhereUniqueInputObjectSchema } from './objects/DepartmentWhereUniqueInput.schema';

export const DepartmentDeleteOneSchema = z.object({
  where: DepartmentWhereUniqueInputObjectSchema,
});
