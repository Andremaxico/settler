import React from 'react';
import { HeaderLogo } from './HeaderLogo';
import { HeaderSearch } from './HeaderSearch';
import { HeaderProfile } from './HeaderProfile';

type PropsType = {};

export const Header: React.FC<PropsType> = ({}) => {
	return (
		<div className='
			py-6
			sticky top-0 left-0
			shadow-md
		'>
			<div className="flex justify-between items-center container">
				<HeaderLogo />
				<HeaderSearch />
				<HeaderProfile />
			</div>
		</div>
	)
}
