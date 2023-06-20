import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutClassInputObjectSchema } from './CommentUpdateWithoutClassInput.schema';
import { CommentUncheckedUpdateWithoutClassInputObjectSchema } from './CommentUncheckedUpdateWithoutClassInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutClassInput> =
  z
    .object({
      where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => CommentUpdateWithoutClassInputObjectSchema),
        z.lazy(() => CommentUncheckedUpdateWithoutClassInputObjectSchema),
      ]),
    })
    .strict();

export const CommentUpdateWithWhereUniqueWithoutClassInputObjectSchema = Schema;
