import React from 'react'
import { UserType } from './Stories';
import Image from 'next/image';

type PropsType = {
	userData: UserType,
};

export const Story: React.FC<PropsType> = ({userData}) => {
	const { avatarUrl, username } = userData;

	return (
		<div className='flex flex-col items-center cursor-pointer hover:scale-110 duration-100'>
			<div className="w-12 rounded-full p-0.5 border-2 border-red-500 mb-1 overflow-hidden box-content">
				<Image 
					src={avatarUrl}
					alt='avatar'
					width={70}
					height={70}
					className='rounded-full h-12 w-full'
				/>
			</div>
			<p className='max-w-10 text-sm truncate'>{username}</p>
		</div>
	)
}
