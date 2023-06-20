import { z } from 'zod';

export const ClassScalarFieldEnumSchema = z.enum([
  'id',
  'schoolId',
  'name',
  'avgDifficulty',
  'avgGrade',
  'numComments',
  'avgBooster',
  'departmentId',
  'avgWorkload',
  'avgRecommended',
]);
