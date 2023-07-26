"use client";

import { signIn } from "next-auth/react";

interface ISignInProps {
	className?: string;
}

const SignIn = ({ className }: ISignInProps) => {
	return (
		<button
			onClick={() => signIn()}
			className={`${className} unselectable flex items-center justify-center rounded bg-primary px-4 py-2 text-sm font-semibold text-secondary ring-2 ring-primaryAccent ring-offset-2 ring-offset-secondary transition duration-150 hover:ring-white`}
		>
			Sign In
		</button>
	);
};

export default SignIn;
