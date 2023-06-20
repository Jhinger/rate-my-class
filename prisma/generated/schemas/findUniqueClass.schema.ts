import { z } from 'zod';
import { ClassWhereUniqueInputObjectSchema } from './objects/ClassWhereUniqueInput.schema';

export const ClassFindUniqueSchema = z.object({
  where: ClassWhereUniqueInputObjectSchema,
});
