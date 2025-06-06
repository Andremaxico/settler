import React from 'react'
import { PostType } from './Posts';
import Image from 'next/image';
import { DotsHorizontalIcon, HeartIcon, ChatIcon, BookmarkIcon, EmojiHappyIcon } from '@heroicons/react/outline'

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
				<button className="">
					<DotsHorizontalIcon className='size-6' />
				</button>
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
			<div className="p-3">
				{/* buttons */}
				<div className="flex justify-between items-center mb-3">
					<div className="flex items-center space-x-4">
						<button className='postBtn'>
							<HeartIcon className='size-6' />
						</button>
						<button className='postBtn'>
							<ChatIcon className='size-6' />
						</button>
					</div>
					<button className='postBtn'>
						<BookmarkIcon className='size-6' />
					</button>
				</div>

				{/* caption */}
				<div className="flex items-center text-sm">
					<p className='font-bold mr-1'>{username}</p>
					<p className='truncate'>{caption}</p>
				</div>


				{/* post input */}
				<form className="flex items-center space-x-1">
					<EmojiHappyIcon className='size-6' />
					<input 
						placeholder='Введіть ваш коментар...'
						className='p-2 text-sm flex-auto outline-0 cursor-pointer focus:shadow-sm furation-75'
					/>
					<button className='font-semibold text-blue-400 text-sm'>
						Опублікувати
					</button>
				</form>
			</div>
		</div>
	)
}
