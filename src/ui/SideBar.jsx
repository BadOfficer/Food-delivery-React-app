import { IoBagRemoveOutline } from 'react-icons/io5';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { RiHome3Line } from 'react-icons/ri';
import BorderButton from './BorderButton';

function SideBar() {
	const buttonsStyles =
		'flex flex-col items-center hover:text-accent w-20 h-20 justify-center';

	return (
		<aside className='flex flex-col border-r-2 border-typeFaded/30 py-2'>
			<ul className='px-2 flex flex-col gap-2'>
				<li>
					<BorderButton className={buttonsStyles} to={'/'} navLink={true}>
						<div>
							<RiHome3Line size={24} />
						</div>
						<span>Home</span>
					</BorderButton>
				</li>
				<li>
					<BorderButton className={buttonsStyles} to={'/menu'} navLink={true}>
						<div>
							<MdOutlineRestaurantMenu size={24} />
						</div>
						<span>Menu</span>
					</BorderButton>
				</li>
				<li>
					<BorderButton className={buttonsStyles} to={'/orders'} navLink={true}>
						<div>
							<IoBagRemoveOutline size={24} />
						</div>
						<span>Orders</span>
					</BorderButton>
				</li>
			</ul>
		</aside>
	);
}

export default SideBar;
