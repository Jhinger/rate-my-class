import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentCreateWithoutClassInputObjectSchema } from './CommentCreateWithoutClassInput.schema';
import { CommentUncheckedCreateWithoutClassInputObjectSchema } from './CommentUncheckedCreateWithoutClassInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateOrConnectWithoutClassInput> = z
  .object({
    where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CommentCreateWithoutClassInputObjectSchema),
      z.lazy(() => CommentUncheckedCreateWithoutClassInputObjectSchema),
    ]),
  })
  .strict();

export const CommentCreateOrConnectWithoutClassInputObjectSchema = Schema;
