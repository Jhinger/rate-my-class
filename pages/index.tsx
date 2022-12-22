import Head from 'next/head'
import Header from '@/components/Header'

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="RateMyClass" content="RateMyClass is an informational hub for University and College students looking for student-based feedback regarding their classes." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header>
				Hello from Header.
			</Header>
		</>
	)
}
