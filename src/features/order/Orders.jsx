import { Outlet, useLoaderData } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import { getOrders } from '../../services/getMenu';
import OrderItem from './OrderItem';

// const orders = [
// 	{
// 		orderID: '4587198751',
// 		date: getFullDate(),
// 		total: 120,
// 		status: 'delivered',
// 		products: [
// 			{ id: 1, title: 'Margherita Pizza', price: 12.99 },
// 			{ id: 2, title: 'Chicken Caesar Salad', price: 10.49 },
// 		],
// 	},
// 	{
// 		orderID: '4587198764',
// 		date: getFullDate(),
// 		total: 120,
// 		status: 'canceled',
// 		products: [
// 			{ id: 1, title: 'Margherita Pizza', price: 12.99 },
// 			{ id: 2, title: 'Chicken Caesar Salad', price: 10.49 },
// 		],
// 	},
// 	{
// 		orderID: '4587198772',
// 		date: getFullDate(),
// 		total: 120,
// 		status: 'in process',
// 		products: [
// 			{ id: 1, title: 'Margherita Pizza', price: 12.99 },
// 			{ id: 2, title: 'Chicken Caesar Salad', price: 10.49 },
// 		],
// 	},
// ];

function Orders() {
	const orders = useLoaderData();
	const { search } = useSearch();

	const filteredOrders =
		search !== ''
			? orders.filter((item) => item.id.toString().includes(search))
			: orders;

	return (
		<>
			<div className='col-span-3 bg-seperators flex p-7'>
				<div className='bg-[#ffffff] rounded-xl flex-1 overflow-hidden p-3'>
					<div className='grid grid-cols-4 bg-typeFaded/30 px-2 py-3 text-xl rounded-lg font-bold'>
						<div>Order ID</div>
						<div>Status</div>
						<div>Date</div>
						<div className='flex justify-end'>Total</div>
					</div>
					<div>
						{filteredOrders.map((order, index) => (
							<OrderItem order={order} key={order.id} index={index + 1} />
						))}
					</div>
				</div>
			</div>
			<div className='col-span-1 border-l-2 border-typeFaded/30'>
				<Outlet />
			</div>
		</>
	);
}

export async function loader() {
	const data = await getOrders();

	return data;
}

export default Orders;
