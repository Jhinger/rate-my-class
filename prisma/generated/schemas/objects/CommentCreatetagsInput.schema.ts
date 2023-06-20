import { z } from 'zod';
import { TAGSchema } from '../enums/TAG.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreatetagsInput> = z
  .object({
    set: z.lazy(() => TAGSchema).array(),
  })
  .strict();

export const CommentCreatetagsInputObjectSchema = Schema;
