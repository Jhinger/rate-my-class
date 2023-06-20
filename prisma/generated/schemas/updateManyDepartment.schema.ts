import { z } from 'zod';
import { DepartmentUpdateManyMutationInputObjectSchema } from './objects/DepartmentUpdateManyMutationInput.schema';
import { DepartmentWhereInputObjectSchema } from './objects/DepartmentWhereInput.schema';

export const DepartmentUpdateManySchema = z.object({
  data: DepartmentUpdateManyMutationInputObjectSchema,
  where: DepartmentWhereInputObjectSchema.optional(),
});
