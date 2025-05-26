import React from 'react'
import { UserType } from './Stories';
import Image from 'next/image';

type PropsType = {
	userData: UserType,
};

export const Story: React.FC<PropsType> = ({userData}) => {
	const { avatarUrl, username } = userData;

	return (
		<div>
			<div className="">
				<Image 
					src={avatarUrl}
					alt='avatar'
					width={70}
					height={70}
				/>
			</div>
			<p>{username}</p>
		</div>
	)
}
