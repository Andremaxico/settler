import React from 'react'
import { Stories } from './Stories/Stories';

type PropsType = {};

export const Feed: React.FC<PropsType> = () => {
	return (
		<div>
			<Stories />
		</div>
	)
}
