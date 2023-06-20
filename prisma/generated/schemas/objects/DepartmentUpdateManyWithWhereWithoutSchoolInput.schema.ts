import { z } from 'zod';
import { DepartmentScalarWhereInputObjectSchema } from './DepartmentScalarWhereInput.schema';
import { DepartmentUpdateManyMutationInputObjectSchema } from './DepartmentUpdateManyMutationInput.schema';
import { DepartmentUncheckedUpdateManyWithoutDepartmentsInputObjectSchema } from './DepartmentUncheckedUpdateManyWithoutDepartmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentUpdateManyWithWhereWithoutSchoolInput> =
  z
    .object({
      where: z.lazy(() => DepartmentScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => DepartmentUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            DepartmentUncheckedUpdateManyWithoutDepartmentsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DepartmentUpdateManyWithWhereWithoutSchoolInputObjectSchema =
  Schema;
