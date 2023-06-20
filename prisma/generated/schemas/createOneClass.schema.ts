import { z } from 'zod';
import { ClassCreateInputObjectSchema } from './objects/ClassCreateInput.schema';
import { ClassUncheckedCreateInputObjectSchema } from './objects/ClassUncheckedCreateInput.schema';

export const ClassCreateOneSchema = z.object({
  data: z.union([
    ClassCreateInputObjectSchema,
    ClassUncheckedCreateInputObjectSchema,
  ]),
});
