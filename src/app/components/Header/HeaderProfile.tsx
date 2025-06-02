import { PlusCircleIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

export const HeaderProfile = () => {
	return (
		<div className='flex items-center'>
			<button className='mr-2 hidden md:inline-flex hover:scale-125 duration-75'>
				<HomeIcon className='size-5 md:size-6' />
			</button>
			<button className='mr-3 hover:scale-125 duration-75'>
				<PlusCircleIcon className='size-5 md:size-6' />
			</button>
			<button className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
				<Image
					src='/images/avatar.jpg'
					alt='avatar'
					width={70}
					height={70}
				/>
			</button>
		</div>
	)
}
