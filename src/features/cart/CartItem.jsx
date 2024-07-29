/* eslint-disable react/prop-types */
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import Counter from '../../ui/Counter';
import { removeItem } from './cartSlice';

function CartItem({ index, title, price, id }) {
	const dispatch = useDispatch();

	const handleRemove = () => {
		dispatch(removeItem(id));
	};

	return (
		<div
			className={`flex flex-col gap-3 text-xl px-3 py-3 ${index % 2 === 0 ? 'bg-highlight' : ''}`}
		>
			<div className='flex justify-between'>
				<span className='block font-bold'>{index}.</span>
				<h3 className='font-bold flex-1 text-center'>{title}</h3>
			</div>
			<div className='flex justify-between'>
				<Counter dishID={id} />
				<div>${price}</div>
				<button onClick={handleRemove}>
					<MdDelete size={24} />
				</button>
			</div>
		</div>
	);
}

export default CartItem;
