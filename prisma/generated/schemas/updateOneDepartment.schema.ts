import { z } from 'zod';
import { DepartmentUpdateInputObjectSchema } from './objects/DepartmentUpdateInput.schema';
import { DepartmentUncheckedUpdateInputObjectSchema } from './objects/DepartmentUncheckedUpdateInput.schema';
import { DepartmentWhereUniqueInputObjectSchema } from './objects/DepartmentWhereUniqueInput.schema';

export const DepartmentUpdateOneSchema = z.object({
  data: z.union([
    DepartmentUpdateInputObjectSchema,
    DepartmentUncheckedUpdateInputObjectSchema,
  ]),
  where: DepartmentWhereUniqueInputObjectSchema,
});
