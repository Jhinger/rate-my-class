// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Class } from '@prisma/client';
import prisma from '@/lib/prismadb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Class[]>
) {
    const { school } = req.body;

    async function getClasses(): Promise<Class[]> {
        const classes = await prisma.class.findMany({
            where: {
                school: {
                    name: school
                }
            }
        });

        return classes;
    }

    const classes = await getClasses();
    res.status(200).json(classes);
}
