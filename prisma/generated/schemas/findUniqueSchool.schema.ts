import { z } from 'zod';
import { SchoolWhereUniqueInputObjectSchema } from './objects/SchoolWhereUniqueInput.schema';

export const SchoolFindUniqueSchema = z.object({
  where: SchoolWhereUniqueInputObjectSchema,
});
