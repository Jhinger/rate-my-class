import Head from 'next/head'
import Header from '@/components/Header'
import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
	const { data: session } = useSession();

	console.log(session);

	return (
		<>
			<Head>
				<title>RateMyClass</title>
				<meta name="RateMyClass" content="RateMyClass is an informational hub for University and College students looking for student-based feedback regarding their classes." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header>
				Hello from Header.
				<button onClick={() => signIn()} className="rounded-md p-4 bg-primary">Sign In</button>
			</Header>
		</>
	)
}
