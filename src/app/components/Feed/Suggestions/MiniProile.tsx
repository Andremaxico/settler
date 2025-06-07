import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type PropsType = {}

export const MiniProile: React.FC<PropsType> = ({}) => {
	return (
		<div className="flex justify-between items-center text-sm w-full">
			<Link 
				className="mr-2"
				href='/'
			>
				<Image 
					src='/images/avatar.jpg'
					alt='avatar'
					width={70}
					height={70}
					className='p-0.5 w-16 h-16 object-cover border-1 border-gray-300 rounded-full'
				/>
			</Link>
			<div className="flex flex-col flex-1">
				<p className='mb-1 text-md font-semibold'>Andremaxico</p>
				<p className='text-gray-400'>Andrii Solomo</p>
			</div>
			<button className='ml-auto font-semibold text-blue-400'>Вийти</button>
		</div>
	)
}
