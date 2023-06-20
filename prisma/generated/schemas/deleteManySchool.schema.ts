import { z } from 'zod';
import { SchoolWhereInputObjectSchema } from './objects/SchoolWhereInput.schema';

export const SchoolDeleteManySchema = z.object({
  where: SchoolWhereInputObjectSchema.optional(),
});
