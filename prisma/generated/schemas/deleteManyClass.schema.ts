import { z } from 'zod';
import { ClassWhereInputObjectSchema } from './objects/ClassWhereInput.schema';

export const ClassDeleteManySchema = z.object({
  where: ClassWhereInputObjectSchema.optional(),
});
