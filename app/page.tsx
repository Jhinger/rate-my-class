import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Overview from '@/components/Overview'
import prisma from '@/lib/prismadb';

import type { School } from "@prisma/client";

export const revalidate = 86400;

async function getSchools(): Promise<Partial<School>[]> {
    const schools = await prisma.school.findMany({
        select: {
            name: true,
            short: true
        }
    });

    return schools;
}

export default async function Page() {
    const schools = await getSchools();
    console.log(schools);

    return (
        <>
            <Hero schools={schools} />
            <Features />
            <Overview /> 
        </>
    )
}