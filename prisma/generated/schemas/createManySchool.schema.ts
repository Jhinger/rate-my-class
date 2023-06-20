import { z } from 'zod';
import { SchoolCreateManyInputObjectSchema } from './objects/SchoolCreateManyInput.schema';

export const SchoolCreateManySchema = z.object({
  data: z.union([
    SchoolCreateManyInputObjectSchema,
    z.array(SchoolCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
