import { SignInResponse } from "next-auth/react";

interface ISignInProps {
    onClickTask(): Promise<SignInResponse | undefined>;
    className?: string;
}

const SignIn = ({ className, onClickTask }: ISignInProps) => {
    return (
        <button onClick={onClickTask} className={`${className} unselectable flex justify-center items-center ring-2 ring-offset-2 ring-offset-secondary ring-primaryAccent hover:ring-white bg-primary transition duration-150 text-secondary font-semibold py-2 px-4 rounded text-sm`}>
            Sign In
        </button>
    )
}

export default SignIn;