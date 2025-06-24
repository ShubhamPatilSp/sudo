import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { SessionStrategy } from "next-auth"

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  pages: {
    signIn: "/auth/signin",
  },
}

export default NextAuth(authOptions)
export { authOptions }
