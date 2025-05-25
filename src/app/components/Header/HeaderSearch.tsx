'use client'

import React, { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

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
				max-w-3xs
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
				className='outline-0 text-sm md:text-md'
			/>
			<button className='cursor-pointer'>
				<MagnifyingGlassIcon
					className='size-5 text-gray-500'
				/>
			</button>
		</form>
	)
}
