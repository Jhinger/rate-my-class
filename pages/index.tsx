import Hero from '@/components/Hero'
import Head from 'next/head'
import Features from '@/components/Features'
import Overview from '@/components/Overview'
import SearchBar from '@/components/SearchBar'
import { defaultOptions } from '@/util/defaults'
import prisma from '@/lib/prismadb'

export default function Home() {
	return (
		<>
			<Head>
				<title>RateMyClass</title>
				<meta name="RateMyClass" content="RateMyClass is an informational hub for University/College students looking for historical class data and student-based feedback regarding their classes." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/static/logo-2.svg" sizes='16x16'/>
			</Head>
			<Hero>
				<SearchBar options={defaultOptions} className="w-[60rem]" />
			</Hero>
			<Features />
			<Overview />
		</>
	)
}

// export async function getStaticProps() {}
