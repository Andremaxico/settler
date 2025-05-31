import React from 'react'
import { Stories } from './Stories/Stories';
import { Posts } from './Posts/Posts';

type PropsType = {};

export const Feed: React.FC<PropsType> = () => {
	return (
		<div>
			<Stories />
			<Posts />
		</div>
	)
}
