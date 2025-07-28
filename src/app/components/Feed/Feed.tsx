import React from 'react'
import { Stories } from './Stories/Stories';
import { Posts } from './Posts/Posts';
import { Suggestions } from './Suggestions/Suggestions';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/nextAuth';

type PropsType = {};

export const Feed: React.FC<PropsType> = async () => {
	const session = await getServerSession(authOptions);

	return (
		<div className="flex items-start space-x-2 max-w-full min-h-0 min-w-0 pt-4 md:pt-8">
			<section className={`flex-auto ${session ? 'md:max-w-2/3' : 'md:max-w-2xl mx-auto'} max-w-full`}>
				<Stories />
				<Posts />
			</section>
			{!!session &&
				<section className={`hidden relative  md:flex flex-col w-1/3`}>
					<Suggestions />
				</section>
			}
		</div>
	)
}
