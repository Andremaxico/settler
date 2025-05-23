import React from 'react';
import { HeaderLogo } from './HeaderLogo';
import { HeaderSearch } from './HeaderSearch';
import { HeaderProfile } from './HeaderProfile';

type PropsType = {};

export const Header: React.FC<PropsType> = ({}) => {
	return (
		<div className='
			px-4 py-6
			sticky top-0 left-0
			flex justify-between items-center
			shadow-md
		'>
			<HeaderLogo />
			<HeaderSearch />
			<HeaderProfile />
		</div>
	)
}
