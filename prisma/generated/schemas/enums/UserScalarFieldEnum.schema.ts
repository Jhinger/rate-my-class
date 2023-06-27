import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'email',
  'name',
  'emailVerified',
  'image',
  'role',
  'canEmail',
]);