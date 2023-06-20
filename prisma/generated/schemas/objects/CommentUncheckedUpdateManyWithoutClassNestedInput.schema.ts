import { z } from 'zod';
import { CommentCreateWithoutClassInputObjectSchema } from './CommentCreateWithoutClassInput.schema';
import { CommentUncheckedCreateWithoutClassInputObjectSchema } from './CommentUncheckedCreateWithoutClassInput.schema';
import { CommentCreateOrConnectWithoutClassInputObjectSchema } from './CommentCreateOrConnectWithoutClassInput.schema';
import { CommentUpsertWithWhereUniqueWithoutClassInputObjectSchema } from './CommentUpsertWithWhereUniqueWithoutClassInput.schema';
import { CommentCreateManyClassInputEnvelopeObjectSchema } from './CommentCreateManyClassInputEnvelope.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithWhereUniqueWithoutClassInputObjectSchema } from './CommentUpdateWithWhereUniqueWithoutClassInput.schema';
import { CommentUpdateManyWithWhereWithoutClassInputObjectSchema } from './CommentUpdateManyWithWhereWithoutClassInput.schema';
import { CommentScalarWhereInputObjectSchema } from './CommentScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUncheckedUpdateManyWithoutClassNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => CommentUpsertWithWhereUniqueWithoutClassInputObjectSchema,
          ),
          z
            .lazy(
              () => CommentUpsertWithWhereUniqueWithoutClassInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CommentCreateManyClassInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => CommentUpdateWithWhereUniqueWithoutClassInputObjectSchema,
          ),
          z
            .lazy(
              () => CommentUpdateWithWhereUniqueWithoutClassInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => CommentUpdateManyWithWhereWithoutClassInputObjectSchema),
          z
            .lazy(() => CommentUpdateManyWithWhereWithoutClassInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CommentScalarWhereInputObjectSchema),
          z.lazy(() => CommentScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CommentUncheckedUpdateManyWithoutClassNestedInputObjectSchema =
  Schema;
