import React from 'react'
import { UserType } from './Stories';
import Image from 'next/image';
import { PlusIcon } from '@heroicons/react/solid';

type PropsType = {
	userData: UserType,
	isMy: boolean,
};

export const Story: React.FC<PropsType> = ({ userData, isMy }) => {
	const { avatarUrl, username } = userData;

	return (
		<div className='flex flex-col items-center cursor-pointer hover:scale-110 duration-100'>
			<div className="relative w-12 rounded-full p-0.5 border-2 border-red-500 mb-1 overflow-hidden box-content">
				<Image 
					src={avatarUrl}
					alt='avatar'
					width={70}
					height={70}
					className='rounded-full h-12 w-full'
				/>
				{isMy && <div className='absolute top-1/2 left-1/2 z-5 w-full h-full flex items-center justify-center -translate-1/2 bg-black/20 '>
					<PlusIcon className=' text-white size-6' />
				</div>}
			</div>
			<p className='max-w-10 text-sm truncate'>{username}</p>
		</div>
	)
}
