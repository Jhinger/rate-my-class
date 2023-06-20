import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutUserInputObjectSchema } from './CommentUpdateWithoutUserInput.schema';
import { CommentUncheckedUpdateWithoutUserInputObjectSchema } from './CommentUncheckedUpdateWithoutUserInput.schema';
import { CommentCreateWithoutUserInputObjectSchema } from './CommentCreateWithoutUserInput.schema';
import { CommentUncheckedCreateWithoutUserInputObjectSchema } from './CommentUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => CommentUpdateWithoutUserInputObjectSchema),
      z.lazy(() => CommentUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CommentCreateWithoutUserInputObjectSchema),
      z.lazy(() => CommentUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const CommentUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
