import NextAuth, { DefaultSession } from "next-auth";
import { Maybe } from "@/types"
import { ROLE } from '@prisma/client'

declare module "next-auth" {
    interface Session {
        user: {
            id?: Maybe<string>;
            role: ROLE;
        } & DefaultSession["user"]
    }

    interface User {
        role: ROLE;
    }
}