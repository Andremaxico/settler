'use client'

import React, { useState } from 'react'
import { SearchCircleIcon } from '@heroicons/react/solid';

type PropsType = {}

export const HeaderSearch: React.FC<PropsType> = ({}) => {
	const [searchValue, setSearchValue] = useState<string>('');  

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchValue(value);
	}

	return (
		<form 
			className='
				flex items-center
				py-1 px-1.5
				w-full max-w-2xs md:max-w-lg
				bg-gray
				border-1 border-gray-300 rounded-sm
				focus-within:border-black hover:shadow-md
				cursor-poiner
			'
		>
			<input
				placeholder='Шукати' 
				value={searchValue}
				onChange={handleChange}
				className='flex-auto outline-0 text-sm md:text-md'
			/>
			<button className='cursor-pointer'>
				<SearchCircleIcon
					className='size-5 text-gray-500'
				/>
			</button>
		</form>
	)
}
