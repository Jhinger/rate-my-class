import { z } from 'zod';
import { ClassCreateManyInputObjectSchema } from './objects/ClassCreateManyInput.schema';

export const ClassCreateManySchema = z.object({
  data: z.union([
    ClassCreateManyInputObjectSchema,
    z.array(ClassCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
