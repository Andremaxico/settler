import React from 'react';
import { HeaderLogo } from './HeaderLogo';
import { HeaderSearch } from './HeaderSearch';
import { HeaderProfile } from './HeaderProfile';

type PropsType = {};

export const Header: React.FC<PropsType> = ({}) => {
	return (
		<header className='
			py-6
			sticky top-0 left-0
			bg-white
			shadow-md
			z-10
		'>
			<div className="flex justify-between items-center space-x-2 container">
				<HeaderLogo />
				<HeaderSearch />
				<HeaderProfile />
			</div>
		</header>
	)
}
