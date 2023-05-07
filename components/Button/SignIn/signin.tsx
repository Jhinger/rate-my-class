"use client";

import { signIn } from "next-auth/react";

interface ISignInProps {
    className?: string;
}

const SignIn = ({ className }: ISignInProps) => {
    return (
        <button onClick={() => signIn()} className={`${className} unselectable flex justify-center items-center ring-2 ring-offset-2 ring-offset-secondary ring-primaryAccent hover:ring-white bg-primary transition duration-150 text-secondary font-semibold py-2 px-4 rounded text-sm`}>
            Sign In
        </button>
    )
}

export default SignIn;