import { z } from 'zod';
import { TAGSchema } from '../enums/TAG.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpdatetagsInput> = z
  .object({
    set: z
      .lazy(() => TAGSchema)
      .array()
      .optional(),
    push: z
      .union([z.lazy(() => TAGSchema), z.lazy(() => TAGSchema).array()])
      .optional(),
  })
  .strict();

export const CommentUpdatetagsInputObjectSchema = Schema;
