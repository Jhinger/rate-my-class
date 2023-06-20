import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentCreateWithoutUserInputObjectSchema } from './CommentCreateWithoutUserInput.schema';
import { CommentUncheckedCreateWithoutUserInputObjectSchema } from './CommentUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CommentCreateWithoutUserInputObjectSchema),
      z.lazy(() => CommentUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const CommentCreateOrConnectWithoutUserInputObjectSchema = Schema;
