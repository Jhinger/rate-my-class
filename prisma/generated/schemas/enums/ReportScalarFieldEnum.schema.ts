import { z } from 'zod';

export const ReportScalarFieldEnumSchema = z.enum([
  'id',
  'dateCreated',
  'classId',
  'userId',
  'commentId',
  'reporteeId',
]);
