'use client'

import Image from 'next/image'
//@ts-expect-error
import minifaker from 'minifaker';
import React, { useEffect, useState } from 'react'
import { MiniProile } from './MiniProile'
import { SuggestionProfile } from './SuggestionProfile';

export type ProfileDataType = {
	avatarUrl: string,
	username: string,
	nickname: string,
	id: number,
}
type PropsType = {}

export const Suggestions: React.FC<PropsType> = ({}) => {
	const [suggestions, setSuggestions] = useState<ProfileDataType[] | null>(null);

	useEffect(() => {
		const profilesData: ProfileDataType[] = minifaker.array(5, (i: number) => ({
			username: minifaker.username({locale: 'en'}),
			nickname: minifaker.jobTitle(),
			avatarUrl: `https://i.pravatar.cc/150?img=${i+1}`,
			id: i,
		}));

		setSuggestions(profilesData);
	}, [])

	return (
		<aside className="fixed top-24 w-[380px] pt-4 md:pt-8">
			<div className="mb-3">
				<MiniProile />
			</div>

			<div className="flex justify-between mb-3 text-sm">
				<p className='font-semibold text-gray-400'>Рекомендації</p>
				<button className='font-semibold text-blue-400'>Усі</button>
			</div>
			{/* sugggestions */}
			<div className="">
				{suggestions && suggestions?.length > 0 ?
					suggestions.map(data => (
						<SuggestionProfile data={data} key={data.id}/>
					))
				:
					<p>Немає рекомендацій</p>
				}
			</div>
		</aside>
	)
}
