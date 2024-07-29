import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { SearchProvider } from '../context/SearchContext';
import Header from './Header';
import SideBar from './SideBar';

function AppLayout() {
	const username = useSelector((state) => state.user.username);
	return (
		<SearchProvider>
			<div className='flex flex-col min-h-screen overflow-hidden h-full'>
				<Header />

				<main className='flex w-full flex-1'>
					{username && <SideBar />}
					<section className='grid grid-cols-4 w-full relative'>
						<Outlet />
					</section>
				</main>
			</div>
		</SearchProvider>
	);
}

export default AppLayout;
