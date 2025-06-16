import GoogleProvider from 'next-auth/providers/google';
import NextAuth, { AuthOptions } from "next-auth"

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_ID || '',
			clientSecret: process.env.NEXT_PUCLIC_GOOGLE_SECRET || '',
		}),
		// ...add more providers here
	],

	session: {},

	pages: {
		signIn: '/auth/signin', //custom signin page
		error: '/auth/error'
	}
}

export default NextAuth(authOptions)