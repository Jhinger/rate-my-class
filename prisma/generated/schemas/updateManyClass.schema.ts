import { z } from 'zod';
import { ClassUpdateManyMutationInputObjectSchema } from './objects/ClassUpdateManyMutationInput.schema';
import { ClassWhereInputObjectSchema } from './objects/ClassWhereInput.schema';

export const ClassUpdateManySchema = z.object({
  data: ClassUpdateManyMutationInputObjectSchema,
  where: ClassWhereInputObjectSchema.optional(),
});
