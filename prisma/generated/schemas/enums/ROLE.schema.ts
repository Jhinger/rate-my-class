import { z } from 'zod';

export const ROLESchema = z.enum(['USER', 'ADMIN']);
