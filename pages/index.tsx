import Hero from '@/components/Hero'
import Head from 'next/head'
import Features from '@/components/Features'
import Overview from '@/components/Overview'
import SearchBar from '@/components/SearchBar'
import prisma from '@/lib/prismadb'
import { defaultOptions } from '@/util/defaults'

import type { School } from '@prisma/client'
import type { InferGetStaticPropsType } from 'next'

export default function Home({ schools }: InferGetStaticPropsType<typeof getStaticProps>) {
	console.log(schools);

	return (
		<>
			<Head>
				<title>RateMyClass</title>
				<meta name="description" content="RateMyClass is an informational hub for University/College students looking for historical class data and student-based feedback regarding their classes." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/static/logo-2.svg" sizes='16x16'/>
			</Head>
			<Hero 
				primaryChild={<SearchBar options={schools} className="w-[60rem]" />}
				secondaryChild={<SearchBar options={defaultOptions} className="" />}
			/>
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
