import Hero from '@/components/Hero'
import Features from '@/components/Features'
import SEO from '@/components/SEO'
import Overview from '@/components/Overview'
import prisma from '@/lib/prismadb';

import type { School } from "@prisma/client";

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

    return (
        <>
            {/**
             * Problems with Hero, Features components.
             */}
			<Overview />   
        </>
    )
}