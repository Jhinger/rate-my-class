import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutUserInputObjectSchema } from './CommentUpdateWithoutUserInput.schema';
import { CommentUncheckedUpdateWithoutUserInputObjectSchema } from './CommentUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => CommentUpdateWithoutUserInputObjectSchema),
      z.lazy(() => CommentUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const CommentUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
