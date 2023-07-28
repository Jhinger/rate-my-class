"use client";

interface IErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function SchoolError({ error, reset }: IErrorProps) {
	return (
		<div>
			<h1>Something went wrong...</h1>
			<div>{error.message}</div>
		</div>
	);
}

// Handle case where user does not provide grade.
