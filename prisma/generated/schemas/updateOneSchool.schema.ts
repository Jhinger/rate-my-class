import { z } from 'zod';
import { SchoolUpdateInputObjectSchema } from './objects/SchoolUpdateInput.schema';
import { SchoolUncheckedUpdateInputObjectSchema } from './objects/SchoolUncheckedUpdateInput.schema';
import { SchoolWhereUniqueInputObjectSchema } from './objects/SchoolWhereUniqueInput.schema';

export const SchoolUpdateOneSchema = z.object({
  data: z.union([
    SchoolUpdateInputObjectSchema,
    SchoolUncheckedUpdateInputObjectSchema,
  ]),
  where: SchoolWhereUniqueInputObjectSchema,
});
