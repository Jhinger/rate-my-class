import { z } from 'zod';
import { DepartmentWhereUniqueInputObjectSchema } from './objects/DepartmentWhereUniqueInput.schema';
import { DepartmentCreateInputObjectSchema } from './objects/DepartmentCreateInput.schema';
import { DepartmentUncheckedCreateInputObjectSchema } from './objects/DepartmentUncheckedCreateInput.schema';
import { DepartmentUpdateInputObjectSchema } from './objects/DepartmentUpdateInput.schema';
import { DepartmentUncheckedUpdateInputObjectSchema } from './objects/DepartmentUncheckedUpdateInput.schema';

export const DepartmentUpsertSchema = z.object({
  where: DepartmentWhereUniqueInputObjectSchema,
  create: z.union([
    DepartmentCreateInputObjectSchema,
    DepartmentUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    DepartmentUpdateInputObjectSchema,
    DepartmentUncheckedUpdateInputObjectSchema,
  ]),
});
