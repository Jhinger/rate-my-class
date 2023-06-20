import { z } from 'zod';
import { CommentCreateWithoutClassInputObjectSchema } from './CommentCreateWithoutClassInput.schema';
import { CommentUncheckedCreateWithoutClassInputObjectSchema } from './CommentUncheckedCreateWithoutClassInput.schema';
import { CommentCreateOrConnectWithoutClassInputObjectSchema } from './CommentCreateOrConnectWithoutClassInput.schema';
import { CommentCreateManyClassInputEnvelopeObjectSchema } from './CommentCreateManyClassInputEnvelope.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUncheckedCreateNestedManyWithoutClassInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CommentCreateWithoutClassInputObjectSchema),
          z.lazy(() => CommentCreateWithoutClassInputObjectSchema).array(),
          z.lazy(() => CommentUncheckedCreateWithoutClassInputObjectSchema),
          z
            .lazy(() => CommentUncheckedCreateWithoutClassInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CommentCreateOrConnectWithoutClassInputObjectSchema),
          z
            .lazy(() => CommentCreateOrConnectWithoutClassInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CommentCreateManyClassInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CommentUncheckedCreateNestedManyWithoutClassInputObjectSchema =
  Schema;
