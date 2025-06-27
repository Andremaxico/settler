import GoogleProvider from 'next-auth/providers/google';
import NextAuth, { AuthOptions, Session } from "next-auth"
import { JWT } from 'next-auth/jwt';
import { AdapterUser } from 'next-auth/adapters';

console.log('id', !!process.env.NEXT_PUBLIC_GOOGLE_ID, 'secret', !!process.env.NEXT_PUCLIC_GOOGLE_SECRET )

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_ID || '',
			clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET || '',
		}),
		// ...add more providers here
	],

	session: {},

	pages: {
		signIn: '/auth/signin', //custom signin page
		error: '/auth/error'
	},

	callbacks: {
		session({session, token, user}: {session: Session, token: JWT, user: AdapterUser}) {
			if(session.user) {
				//@ts-expect-error
				session.user.username = session.user?.name?.split(' ').join('').toLocaleLowerCase()
				//@ts-expect-error
				session.user.uid = token.sub;
			}
			  
			return session;
		}
	}
}

export default NextAuth(authOptions)