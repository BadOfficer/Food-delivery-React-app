/* eslint-disable react/prop-types */
function OrderDetailItem({ item, index }) {
	const { title, quantity, price } = item;

	return (
		<div
			className={`flex gap-3 text-lg px-3 justify-between py-3 ${index % 2 !== 0 ? 'bg-seperators' : ''}`}
		>
			<div className='font-bold'>{index}</div>
			<h2 className='flex-1'>{title}</h2>
			<div className='text-accent'>x{quantity}</div>
			<div>${price * quantity}</div>
		</div>
	);
}

export default OrderDetailItem;
