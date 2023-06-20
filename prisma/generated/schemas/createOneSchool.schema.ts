import { z } from 'zod';
import { SchoolCreateInputObjectSchema } from './objects/SchoolCreateInput.schema';
import { SchoolUncheckedCreateInputObjectSchema } from './objects/SchoolUncheckedCreateInput.schema';

export const SchoolCreateOneSchema = z.object({
  data: z.union([
    SchoolCreateInputObjectSchema,
    SchoolUncheckedCreateInputObjectSchema,
  ]),
});
