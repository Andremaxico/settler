import Link from 'next/dist/client/link'
import Image from 'next/image'
import React from 'react'
import { ProfileDataType } from './Suggestions'

type PropsType = {
	data: ProfileDataType,
}

export const SuggestionProfile: React.FC<PropsType> = ({data}) => {
	const { avatarUrl, id, nickname, username } = data;

	return (
		<div className="flex justify-between items-center text-sm w-full">
			<Link 
				className="mr-2"
				href='/'
			>
				<Image 
					src={avatarUrl}
					alt='avatar'
					width={70}
					height={70}
					className='p-0.5 w-12 h-12 object-cover border-1 border-gray-300 rounded-full'
				/>
			</Link>
			<div className="flex flex-col flex-1">
				<p className='mb-1 text-md font-semibold'>{username}</p>
				<p className='max-w-2/3 text-gray-400 truncate'>{nickname}</p>
			</div>
			<button className='ml-auto font-semibold text-blue-400'>Стежити</button>
		</div>
	)
}
