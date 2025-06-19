import { authOptions } from '@/app/lib/nextAuth'
import { PlusCircleIcon } from '@heroicons/react/outline'
import { HomeIcon, LoginIcon } from '@heroicons/react/solid'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

export type SessionType = {
	user: {
		name: string,
		email: string,
		image: string,
	}
}

export const HeaderProfile = async () => {
	const session: SessionType | null = await getServerSession(authOptions);
	console.log(session);

	return (
		<div className='flex items-center'>
			<button className='mr-2 hidden md:inline-flex hover:scale-125 duration-75'>
				<HomeIcon className='size-5 md:size-6' />
			</button>
			<button className='mr-3 hover:scale-125 duration-75'>
				<PlusCircleIcon className='size-5 md:size-6' />
			</button>
			{session ?
				<button className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
					<Image
						src={session.user.image}
						alt='avatar'
						width={70}
						height={70}
					/>
				</button>
			:
				<button className='hover:text-blue-600'>
					<span className='hidden md:inline-block'>Sign In</span>
					<LoginIcon className='size-4' />
				</button>
			}
		</div>
	)
}
