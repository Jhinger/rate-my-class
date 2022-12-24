import NextAuth, { Session, User } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/prismadb"

interface ISessionProps {
    session: Session;
    user: User;
}

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: 'database',
    maxAge: 30 * 24 * 60 * 60
  },
  callbacks: {
    async session({session, user}: ISessionProps) {
        session.user.id = user.id;
        return session;
    }
  },
  theme: {
    brandColor: "#A8C7F5"
  }
})