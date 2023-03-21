import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prismadb';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    

    res.status(200).json({ name: 'John Doe' })
}
