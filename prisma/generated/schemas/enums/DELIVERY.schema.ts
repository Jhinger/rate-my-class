import { z } from 'zod';

export const DELIVERYSchema = z.enum(['INPERSON', 'ONLINE']);
