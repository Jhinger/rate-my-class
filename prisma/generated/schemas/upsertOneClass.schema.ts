import { z } from 'zod';
import { ClassWhereUniqueInputObjectSchema } from './objects/ClassWhereUniqueInput.schema';
import { ClassCreateInputObjectSchema } from './objects/ClassCreateInput.schema';
import { ClassUncheckedCreateInputObjectSchema } from './objects/ClassUncheckedCreateInput.schema';
import { ClassUpdateInputObjectSchema } from './objects/ClassUpdateInput.schema';
import { ClassUncheckedUpdateInputObjectSchema } from './objects/ClassUncheckedUpdateInput.schema';

export const ClassUpsertSchema = z.object({
  where: ClassWhereUniqueInputObjectSchema,
  create: z.union([
    ClassCreateInputObjectSchema,
    ClassUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ClassUpdateInputObjectSchema,
    ClassUncheckedUpdateInputObjectSchema,
  ]),
});
