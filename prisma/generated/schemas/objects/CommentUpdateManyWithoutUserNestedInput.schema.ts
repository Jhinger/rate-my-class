import { z } from 'zod';
import { CommentCreateWithoutUserInputObjectSchema } from './CommentCreateWithoutUserInput.schema';
import { CommentUncheckedCreateWithoutUserInputObjectSchema } from './CommentUncheckedCreateWithoutUserInput.schema';
import { CommentCreateOrConnectWithoutUserInputObjectSchema } from './CommentCreateOrConnectWithoutUserInput.schema';
import { CommentUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './CommentUpsertWithWhereUniqueWithoutUserInput.schema';
import { CommentCreateManyUserInputEnvelopeObjectSchema } from './CommentCreateManyUserInputEnvelope.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './CommentUpdateWithWhereUniqueWithoutUserInput.schema';
import { CommentUpdateManyWithWhereWithoutUserInputObjectSchema } from './CommentUpdateManyWithWhereWithoutUserInput.schema';
import { CommentScalarWhereInputObjectSchema } from './CommentScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpdateManyWithoutUserNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => CommentUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => CommentUpsertWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => CommentCreateManyUserInputEnvelopeObjectSchema)
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
        z.lazy(() => CommentUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => CommentUpdateWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => CommentUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => CommentUpdateManyWithWhereWithoutUserInputObjectSchema)
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

export const CommentUpdateManyWithoutUserNestedInputObjectSchema = Schema;
