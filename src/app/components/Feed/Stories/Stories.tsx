'use client'

import React, { useEffect, useState } from 'react';
//no types for this package
//@ts-expect-error
import minifaker from 'minifaker';
import 'minifaker/locales/en';
import { Story } from './Story';
import { useSession } from 'next-auth/react';

type PropsType = {}
export type UserType = {
	username: string,
	avatarUrl: string,
	id: number,
}

export const Stories: React.FC<PropsType> = ({}) => {
	const { data: session } = useSession();
	const [storyUsers, setStoryUsers] = useState<UserType[] | null>(null)

	console.log('session', session);

	useEffect(() => {

		const users = minifaker.array(20, (i: number) => ({
			username: minifaker.username({locale: 'en'}).replace('.', ' '),
			avatarUrl: `https://i.pravatar.cc/150?img=${i+1}`,
			id: i,
		}))

		if(storyUsers) {
			setStoryUsers([...storyUsers, ...users]);
		} else {
			setStoryUsers([...users]);
		}

		console.log(users);
	}, []);

	useEffect(() => {
		if(session?.user && storyUsers?.filter(user => user.id === 21).length === 0) {
			const authedUserData: UserType = {
				avatarUrl: session.user.image || '',
				id: 21,
				username: session.user.name || '',
			};

			console.log('story users', storyUsers);

			if(storyUsers) {
				setStoryUsers([authedUserData, ...storyUsers]);
			} else {
				setStoryUsers([authedUserData]);
			}
		}
	}, [session])

	if(!storyUsers || storyUsers.length == 0) return <p>No stories</p>

	console.log('story users end', storyUsers);

	return (
		<div className='flex space-x-2 p-4 mb-4 border border-gray-400 rounded-md overflow-x-scroll scrollbar-none max-w-full'>
			{storyUsers.map(userData => <Story isMy={userData.id === 21} userData={userData} key={userData.id} />)}
		</div>
	)
}
