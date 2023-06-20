import { z } from 'zod';
import { SchoolUpdateManyMutationInputObjectSchema } from './objects/SchoolUpdateManyMutationInput.schema';
import { SchoolWhereInputObjectSchema } from './objects/SchoolWhereInput.schema';

export const SchoolUpdateManySchema = z.object({
  data: SchoolUpdateManyMutationInputObjectSchema,
  where: SchoolWhereInputObjectSchema.optional(),
});
