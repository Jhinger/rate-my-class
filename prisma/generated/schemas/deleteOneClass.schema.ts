import { z } from 'zod';
import { ClassWhereUniqueInputObjectSchema } from './objects/ClassWhereUniqueInput.schema';

export const ClassDeleteOneSchema = z.object({
  where: ClassWhereUniqueInputObjectSchema,
});
