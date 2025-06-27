'use client'

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SessionType } from '../../Header/HeaderProfile';

type PropsType = {}

export const MiniProile: React.FC<PropsType> = ({}) => {
	const { data } = useSession();
	const session = data as unknown as SessionType;
	console.log(session);
	
	return (
		<div className="flex justify-between items-center text-sm w-full">
			<Link 
				className="mr-2"
				href='/'
			>
				<Image 
					src={session?.user.image}
					alt='avatar'
					width={70}
					height={70}
					className='p-0.5 w-16 h-16 object-cover border-1 border-gray-300 rounded-full'
				/>
			</Link>
			<div className="flex flex-col flex-1">
				<p className='mb-1 text-md font-semibold'>{session.user.username}</p>
				<p className='text-gray-400'>{session.user.name}</p>
			</div>
			<button 
				className='ml-auto font-semibold text-blue-400'
				onClick={()=> signOut()}
			>
				Вийти
			</button>
		</div>
	)
}
