'use client'

import React, { useEffect, useState } from 'react';
//no types for this package
//@ts-expect-error
import minifaker from 'minifaker';
import 'minifaker/locales/en';
import { Story } from './Story';

type PropsType = {}
export type UserType = {
	username: string,
	avatarUrl: string,
	id: number,
}

export const Stories: React.FC<PropsType> = ({}) => {
	const [storyUsers, setStoryUsers] = useState<UserType[] | null>(null)

	useEffect(() => {
		const users = minifaker.array(20, (i: number) => ({
			username: minifaker.username({locale: 'en'}).replace('.', ' '),
			avatarUrl: `https://i.pravatar.cc/150?img=${i+1}`,
			id: i,
		}))

		setStoryUsers(users);

		console.log(users);
	}, [])

	if(!storyUsers || storyUsers.length == 0) return <p>No stories</p>

	return (
		<div className='flex space-x-2 p-4 border border-gray-400 rounded-md overflow-x-scroll scrollbar-none container max-w-[95vw]'>
			{storyUsers.map(userData => <Story userData={userData} key={userData.id} />)}
		</div>
	)
}
