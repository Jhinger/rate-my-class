import { z } from 'zod';

export const CommentScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'classId',
  'createdAt',
  'difficulty',
  'isRecommended',
  'upvoteCount',
  'workload',
  'teacher',
  'department',
  'isGPABooster',
  'overallRating',
  'tags',
  'deleted',
  'delivery',
  'gradeRecieved',
  'primaryText',
  'secondaryText',
]);
