import { DefaultSession } from "next-auth"

interface User extends DefaultSession["user"] {
  id?: string
}

interface Session {
  user: User
}
