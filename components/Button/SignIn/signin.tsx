import { SignInResponse } from "next-auth/react";

interface ISignInProps {
    onClickTask(): Promise<SignInResponse | undefined>;
}

const SignIn = ({ onClickTask }: ISignInProps) => {
    return (
        <div className="relative mr-8">
            <button onClick={onClickTask} className="unselectable ring-2 ring-offset-2 ring-offset-secondary ring-primaryAccent hover:ring-white bg-primary transition duration-150 text-secondary font-semibold py-2 px-4 rounded text-sm">
                Sign In
            </button>
        </div>
    )
}

export default SignIn;