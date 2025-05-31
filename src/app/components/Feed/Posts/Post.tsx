import React from 'react'
import { PostType } from './Posts';
import Image from 'next/image';

type PropsType = {
	data: PostType,
};

export const Post: React.FC<PropsType> = ({data}) => {
	const { avatarUrl, caption, id, imageUrl, username } = data;

	return (
		<div>
			<div className="flex justify-between">
				<div className="">
					<Image
						src={avatarUrl}
						alt={`${username} avatar`}
						width={40}
						height={40}
					/>
					<p className="">{username}</p>
				</div>
			</div>
			<div className="">

			</div>
			<div className="">
				<div className=""></div>
			</div>
		</div>
	)
}
