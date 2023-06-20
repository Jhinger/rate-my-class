import { z } from 'zod';
import { ClassUpdateInputObjectSchema } from './objects/ClassUpdateInput.schema';
import { ClassUncheckedUpdateInputObjectSchema } from './objects/ClassUncheckedUpdateInput.schema';
import { ClassWhereUniqueInputObjectSchema } from './objects/ClassWhereUniqueInput.schema';

export const ClassUpdateOneSchema = z.object({
  data: z.union([
    ClassUpdateInputObjectSchema,
    ClassUncheckedUpdateInputObjectSchema,
  ]),
  where: ClassWhereUniqueInputObjectSchema,
});
