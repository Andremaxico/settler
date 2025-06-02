import React from 'react'
import { PostType } from './Posts';
import Image from 'next/image';
import { DotsHorizontalIcon } from '@heroicons/react/outline'

type PropsType = {
	data: PostType,
};

export const Post: React.FC<PropsType> = ({data}) => {
	const { avatarUrl, caption, id, imageUrl, username } = data;

	return (
		<div className='border border-gray-300'>
			<div className="flex justify-between items-center p-2">
				<div className="flex items-center">
					<Image
						src={avatarUrl}
						alt={`${username} avatar`}
						width={50}
						height={50}
						className='mr-2 p-0.5 border border-gray-300 rounded-full'
					/>
					<p className="">{username}</p>
				</div>
				<div className="">
					<DotsHorizontalIcon className='size-6' />
				</div>
			</div>
			<div className="">
				<Image 
					alt='image'
					src={imageUrl}
					width={700}
					height={700}
					className='object-cover w-full'
				/>
			</div>
			<div className="">
				<div className=""></div>
			</div>
		</div>
	)
}
