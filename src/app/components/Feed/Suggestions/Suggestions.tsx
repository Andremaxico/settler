import Image from 'next/image'
import React from 'react'
import { MiniProile } from './MiniProile'

type PropsType = {}

export const Suggestions: React.FC<PropsType> = ({}) => {
	return (
		<aside className="fixed top-24 w-[380px]">
			<div className="">
				<MiniProile />
			</div>

			<div className=""></div>
			{/* sugggestions */}
			<div className=""></div>
		</aside>
	)
}
