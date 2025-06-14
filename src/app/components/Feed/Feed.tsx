import React from 'react'
import { Stories } from './Stories/Stories';
import { Posts } from './Posts/Posts';
import { Suggestions } from './Suggestions/Suggestions';

type PropsType = {};

export const Feed: React.FC<PropsType> = () => {
	return (
		<div className="flex items-start space-x-2 max-w-full min-h-0 min-w-0 pt-4 md:pt-8">
			<section className='flex-auto md:max-w-2/3 max-w-full'>
				<Stories />
				<Posts />
			</section>
			<section className='hidden relative md:flex flex-col w-1/3'>
				<Suggestions />
			</section>
		</div>
	)
}
