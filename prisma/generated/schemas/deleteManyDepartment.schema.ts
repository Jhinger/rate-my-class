import { z } from 'zod';
import { DepartmentWhereInputObjectSchema } from './objects/DepartmentWhereInput.schema';

export const DepartmentDeleteManySchema = z.object({
  where: DepartmentWhereInputObjectSchema.optional(),
});
