import NextAuth, { DefaultSession } from "next-auth";
import { Maybe } from "@/types"

declare module "next-auth" {
    interface Session {
        user: {
            id?: Maybe<string>;
        } & DefaultSession["user"]
    }
}