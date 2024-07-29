import { Outlet, useLoaderData } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import { getMenu } from '../../services/getMenu';
import MenuItem from './MenuItem';

// const menu = [
// 	{
// 		id: 1,
// 		title: 'Margherita Pizza',
// 		price: 12.99,
// 		preview: '1.png',
// 	},
// 	{ id: 2, title: 'Chicken Caesar Salad', price: 10.49, preview: '2.png' },
// 	{ id: 3, title: 'Beef Tacos', price: 8.99, preview: '3.png' },
// 	{ id: 4, title: 'Pad Thai', price: 11.99, preview: '4.png' },
// 	{ id: 5, title: 'Butter Chicken', price: 13.99, preview: '5.png' },
// 	{ id: 6, title: 'Sushi Platter', price: 16.99, preview: '6.png' },
// 	{ id: 7, title: 'Vegetarian Burrito Bowl', price: 9.99, preview: '7.png' },
// 	{ id: 8, title: 'Spaghetti Carbonara', price: 12.49, preview: '8.png' },
// 	{ id: 9, title: 'Falafel Wrap', price: 7.99, preview: '9.png' },
// 	{ id: 10, title: 'BBQ Ribs', price: 14.99, preview: '10.png' },
// ];

function Menu() {
	const menu = useLoaderData();
	const { search } = useSearch();

	const filteredMenu =
		search !== '' ? menu.filter((item) => item.title.includes(search)) : menu;

	return (
		<>
			<div className='min-h-screen col-span-3 bg-seperators block relative'>
				<div className='grid w-full cards px-5 gap-5 py-5 cards'>
					{filteredMenu.map((dish) => (
						<MenuItem dish={dish} key={dish.id} />
					))}
				</div>
			</div>
			<div className='col-span-1'>
				<Outlet />
			</div>
		</>
	);
}

export async function loader() {
	const data = await getMenu();

	return data;
}

export default Menu;
