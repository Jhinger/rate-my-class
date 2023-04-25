import Hero from '@/components/Hero'
import Features from '@/components/Features'
import SEO from '@/components/SEO'
import Overview from '@/components/Overview'
import prisma from '@/lib/prismadb'

import type { School } from '@prisma/client'
import type { InferGetStaticPropsType } from 'next'

export default function Home({ schools }: InferGetStaticPropsType<typeof getStaticProps>) {

	console.log(schools);

	return (
		<>
			<SEO />
			<Hero schools={schools} />
			<Features />
			<Overview />
		</>
	)
}

export async function getStaticProps() {
	const schools: Partial<School>[] = await prisma.school.findMany({
		select: {
			name: true,
			short: true
		}
	});

	return {
		props: {
			schools
		}
	}
}
