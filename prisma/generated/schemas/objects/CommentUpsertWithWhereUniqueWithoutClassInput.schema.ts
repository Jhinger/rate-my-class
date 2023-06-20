import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutClassInputObjectSchema } from './CommentUpdateWithoutClassInput.schema';
import { CommentUncheckedUpdateWithoutClassInputObjectSchema } from './CommentUncheckedUpdateWithoutClassInput.schema';
import { CommentCreateWithoutClassInputObjectSchema } from './CommentCreateWithoutClassInput.schema';
import { CommentUncheckedCreateWithoutClassInputObjectSchema } from './CommentUncheckedCreateWithoutClassInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutClassInput> =
  z
    .object({
      where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => CommentUpdateWithoutClassInputObjectSchema),
        z.lazy(() => CommentUncheckedUpdateWithoutClassInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => CommentCreateWithoutClassInputObjectSchema),
        z.lazy(() => CommentUncheckedCreateWithoutClassInputObjectSchema),
      ]),
    })
    .strict();

export const CommentUpsertWithWhereUniqueWithoutClassInputObjectSchema = Schema;
