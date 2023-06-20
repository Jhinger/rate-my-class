import { z } from 'zod';
import { SchoolWhereUniqueInputObjectSchema } from './objects/SchoolWhereUniqueInput.schema';

export const SchoolDeleteOneSchema = z.object({
  where: SchoolWhereUniqueInputObjectSchema,
});
