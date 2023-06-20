import { z } from 'zod';
import { DepartmentWhereUniqueInputObjectSchema } from './objects/DepartmentWhereUniqueInput.schema';

export const DepartmentFindUniqueSchema = z.object({
  where: DepartmentWhereUniqueInputObjectSchema,
});
