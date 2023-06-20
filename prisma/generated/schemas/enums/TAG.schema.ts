import { z } from 'zod';

export const TAGSchema = z.enum([
  'TEST_HEAVY',
  'ASSIGNMENT_HEAVY',
  'LECTURES_RECORDED',
  'REQUIRED',
  'AVOID',
  'RECOMMENDED',
  'THEORY_HEAVY',
  'READING_HEAVY',
  'GROUPWORK_HEAVY',
  'PARTICIPATION_MATTERS',
]);
