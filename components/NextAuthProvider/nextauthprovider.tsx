"use client";

import { SessionProvider } from "next-auth/react";

interface INextAuthProviderProps {
    children: React.ReactNode;
}

const NextAuthProvider = ({ children }: INextAuthProviderProps) => {
    return (
        <SessionProvider>
            { children }
        </SessionProvider>
    )
}

export default NextAuthProvider;