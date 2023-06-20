import { z } from 'zod';
import { CommentCreateManyClassInputObjectSchema } from './CommentCreateManyClassInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateManyClassInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => CommentCreateManyClassInputObjectSchema),
      z.lazy(() => CommentCreateManyClassInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const CommentCreateManyClassInputEnvelopeObjectSchema = Schema;
