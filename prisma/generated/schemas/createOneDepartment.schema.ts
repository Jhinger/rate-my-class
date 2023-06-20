import { z } from 'zod';
import { DepartmentCreateInputObjectSchema } from './objects/DepartmentCreateInput.schema';
import { DepartmentUncheckedCreateInputObjectSchema } from './objects/DepartmentUncheckedCreateInput.schema';

export const DepartmentCreateOneSchema = z.object({
  data: z.union([
    DepartmentCreateInputObjectSchema,
    DepartmentUncheckedCreateInputObjectSchema,
  ]),
});
