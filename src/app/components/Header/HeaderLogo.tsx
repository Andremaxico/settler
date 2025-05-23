import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type PropsType = {};

export const HeaderLogo: React.FC<PropsType> = () => {
	return (
		<Link className='relative group h-auto w-20 cursor-pointer' href={'/'}>
			<div className="
				w-full
				flex items-center justify-center
				group-hover:opacity-0
				duration-100
			">
				<Image 
					alt='logo'
					width={100}
					height={100}
					src={'/images/logo_black.png'}
					className='w-full'
				/>
			</div>
			<div className="
				absolute top-0 left-0
				w-full
				flex items-center justify-center
				opacity-0 group-hover:opacity-100
				duration-100
			">
				<Image 
					alt='logo'
					width={100}
					height={100}
					src={'/images/Logo.png'}
					className='w-full'
				/>
			</div>
		</Link>
	)
}
