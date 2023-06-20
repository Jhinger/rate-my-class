import { z } from 'zod';
import { CommentCreateWithoutUserInputObjectSchema } from './CommentCreateWithoutUserInput.schema';
import { CommentUncheckedCreateWithoutUserInputObjectSchema } from './CommentUncheckedCreateWithoutUserInput.schema';
import { CommentCreateOrConnectWithoutUserInputObjectSchema } from './CommentCreateOrConnectWithoutUserInput.schema';
import { CommentCreateManyUserInputEnvelopeObjectSchema } from './CommentCreateManyUserInputEnvelope.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CommentCreateWithoutUserInputObjectSchema),
        z.lazy(() => CommentCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => CommentUncheckedCreateWithoutUserInputObjectSchema),
        z
          .lazy(() => CommentUncheckedCreateWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => CommentCreateOrConnectWithoutUserInputObjectSchema),
        z
          .lazy(() => CommentCreateOrConnectWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => CommentCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => CommentWhereUniqueInputObjectSchema),
        z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const CommentCreateNestedManyWithoutUserInputObjectSchema = Schema;
