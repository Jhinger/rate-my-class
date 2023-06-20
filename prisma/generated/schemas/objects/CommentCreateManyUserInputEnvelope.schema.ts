import { z } from 'zod';
import { CommentCreateManyUserInputObjectSchema } from './CommentCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => CommentCreateManyUserInputObjectSchema),
      z.lazy(() => CommentCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const CommentCreateManyUserInputEnvelopeObjectSchema = Schema;
