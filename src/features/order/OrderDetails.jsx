import { useLoaderData } from 'react-router-dom';
import { getOrderById } from '../../services/getMenu';
import OrderDetailItem from './OrderDetailItem';

// const order = {
// 	id: '4587198751',
// 	date: getFullDate(),
// 	total: 120,
// 	status: 'delivered',
// 	products: [
// 		{ id: 1, title: 'Margherita Pizza', price: 12.99, quantity: 2 },
// 		{ id: 2, title: 'Chicken Caesar Salad', price: 10.49, quantity: 1 },
// 	],
// };

function OrderDetails() {
	const order = useLoaderData();

	return (
		<div className='flex flex-col gap-3 h-full'>
			<div className='border-b-2 border-b-typeFaded/30 flex flex-col gap-2 pb-3 px-3 py-3'>
				<h1 className='text-2xl font-bold'>Order ID #{order.id}</h1>
				<div className='flex justify-between items-center'>
					<div className='text-xl'>
						Status: <span className='text-accent'>{order.status}</span>
					</div>
					<div>{order.date}</div>
				</div>
			</div>
			<div className='flex-1'>
				{order.cart.map((item, index) => (
					<OrderDetailItem item={item} index={index + 1} key={item.id} />
				))}
			</div>
			<div className='bg-seperators text-xl justify-between flex px-3 py-5'>
				<span>Total:</span>
				<b>${Number(order.total).toFixed(2)}</b>
			</div>
		</div>
	);
}

export async function loader({ params }) {
	const data = await getOrderById(params.orderID);

	return data;
}

export default OrderDetails;
