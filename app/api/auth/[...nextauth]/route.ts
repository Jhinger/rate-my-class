import NextAuth, { NextAuthOptions, Session, User } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/prismadb"

interface ISessionProps {
    session: Session;
    user: User;
}

export const authOptions: NextAuthOptions = {
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
        session.user.role = user.role;
        return session;
    }
  },
  theme: {
    brandColor: "#A8C7F5"
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };