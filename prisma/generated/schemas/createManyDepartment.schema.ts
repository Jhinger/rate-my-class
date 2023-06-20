import { z } from 'zod';
import { DepartmentCreateManyInputObjectSchema } from './objects/DepartmentCreateManyInput.schema';

export const DepartmentCreateManySchema = z.object({
  data: z.union([
    DepartmentCreateManyInputObjectSchema,
    z.array(DepartmentCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
