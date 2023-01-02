import Hero from '@/components/Hero'
import Head from 'next/head'
import Features from '@/components/Features'
import Overview from '@/components/Overview'

export default function Home() {
	return (
		<>
			<Head>
				<title>RateMyClass</title>
				<meta name="RateMyClass" content="RateMyClass is an informational hub for University and College students looking for student-based feedback regarding their classes." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/static/logo-2.svg" sizes='16x16'/>
			</Head>
			<Hero />
			<Features />
			<Overview />
		</>
	)
}
