import { z } from 'zod';
import { SchoolWhereUniqueInputObjectSchema } from './objects/SchoolWhereUniqueInput.schema';
import { SchoolCreateInputObjectSchema } from './objects/SchoolCreateInput.schema';
import { SchoolUncheckedCreateInputObjectSchema } from './objects/SchoolUncheckedCreateInput.schema';
import { SchoolUpdateInputObjectSchema } from './objects/SchoolUpdateInput.schema';
import { SchoolUncheckedUpdateInputObjectSchema } from './objects/SchoolUncheckedUpdateInput.schema';

export const SchoolUpsertSchema = z.object({
  where: SchoolWhereUniqueInputObjectSchema,
  create: z.union([
    SchoolCreateInputObjectSchema,
    SchoolUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    SchoolUpdateInputObjectSchema,
    SchoolUncheckedUpdateInputObjectSchema,
  ]),
});
