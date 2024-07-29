import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';
import Search from './Search';

function Header() {
	const username = useSelector((state) => state.user.username);
	const currentLocation = useLocation();
	const homeLocation = currentLocation.pathname === '/';

	const { setSearch } = useSearch();

	return (
		<header className='py-3 border-b-2 border-typeFaded/30'>
			<div className='flex items-center gap-10 px-2'>
				<NavLink to={'/'} className='text-4xl font-bold'>
					YumDash
				</NavLink>
				<div className='flex flex-1'>
					{!homeLocation && <Search onChange={setSearch} />}
				</div>
				{username && (
					<div className='bg-accent px-3 py-2 rounded-xl text-[white]'>
						<span className='font-medium'>Welcome</span>, {username}
					</div>
				)}
			</div>
		</header>
	);
}

export default Header;
