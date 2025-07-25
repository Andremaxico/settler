'use client'

import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { SessionType } from '../Header/HeaderProfile';

type PropsType = {};

export const SignIn: React.FC<PropsType> = ({}) => {
	const router = useRouter();
	const session = useSession() as unknown as SessionType;

	const redirect = () => router.push(`${process.env.NEXT_PUBLIC_BASE_URL}`);

	const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {

		console.log('callbacl url', process.env.NEXT_PUBLIC_NEXTAUTH_URL)
		const res = await signIn('google', { redirect: true, callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL || 'http://localhost:3000'}/api/auth/callback/google` });

		if(res?.ok) redirect();
		console.log('signin response', res);
	}
 
	useEffect(() => {
		if(session.user) redirect();
	})

	return (
		<div className='flex items-center space-x-2 max-w-3xl mx-auto'>
			<div className="hidden sm:block flex-2/3 grow-0">
				<Image 
					src='https://socialboss.org/wp-content/uploads/2023/09/insta-views.png'
					alt='settler photo'
					width={786}
					height={612}
					className='object-cover'
				/>
			</div>
			<div className="flex flex-col items-center">
				<div className="mb-4">
					<Image 
						src='/images/logo_2.png'
						alt='logo'
						width={60}
						height={60}
					/>
				</div>

				<p className='mb-1 text-xl font-bold'>Welcome back!</p>
				<p className='mb-4 italic'>App created for learning purposes</p>

				<button className='py-1.5 px-2 bg-blue-500 text-white rounded-md' onClick={handleClick}>Sign in with Google</button>
			</div>
		</div>
	)
}
