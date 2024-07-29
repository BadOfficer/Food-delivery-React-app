import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
function OrderItem({ order, index }) {
	const { id, total, date, status } = order;
	return (
		<Link to={`${id}`}>
			<div
				className={`grid grid-cols-4 px-3 py-3 text-lg rounded-lg ${index % 2 === 0 ? 'bg-seperators' : ''}`}
			>
				<h1>{id}</h1>
				<div className='flex justify-start'>
					<div
						className={`px-2 py-1 rounded-xl text-[#ffffff] ${status === 'delivered' ? 'bg-pop' : status === 'canceled' ? 'bg-[#bf0404]' : 'bg-[#d9ce00]'}`}
					>
						{status}
					</div>
				</div>
				<time>{date}</time>
				<span className='flex justify-end'>${Number(total).toFixed(2)}</span>
			</div>
		</Link>
	);
}

export default OrderItem;
