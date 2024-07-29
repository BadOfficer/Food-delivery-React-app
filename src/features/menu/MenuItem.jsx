/* eslint-disable react/prop-types */
import { FaCheck } from 'react-icons/fa';
import { IoBagRemoveOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addItem, getQuantitiesById, removeItem } from '../cart/cartSlice';

function MenuItem({ dish }) {
	const { id, title, preview, price } = dish;

	const dispatch = useDispatch();
	const itemInCart = useSelector(getQuantitiesById(id)) > 0;
	const currentLocation = useLocation();
	const blockedCurrentPosition = currentLocation.pathname === '/menu/new-order';

	const handleAddToCart = () => {
		const newItem = {
			id,
			title,
			quantity: 1,
			price,
			total: price * 1,
		};

		dispatch(addItem(newItem));
	};

	const handleRemoveFromCart = () => {
		dispatch(removeItem(id));
	};

	return (
		<div className='flex h-80 flex-col bg-[white] gap-3 items-center p-3 justify-between shadow-md rounded-xl mx-auto w-60'>
			<div className='max-w-40 max-h-40 object-cover flex-1 flex items-center'>
				<img src={preview} alt={title} />
			</div>
			<h2 className='text-xl break-words'>{title}</h2>
			<div className='flex justify-between w-full items-center'>
				<div className='text-2xl'>${price}</div>
				{!itemInCart ? (
					<button
						className='bg-accent text-[white] p-3 rounded-xl font-bold hover:bg-accentHover disabled:bg-accentHover disabled:cursor-not-allowed'
						onClick={handleAddToCart}
						disabled={blockedCurrentPosition}
					>
						<IoBagRemoveOutline size={24} />
					</button>
				) : (
					<button
						className='bg-pop text-[white] p-3 rounded-xl font-bold disabled:cursor-not-allowed'
						onClick={handleRemoveFromCart}
						disabled={blockedCurrentPosition}
					>
						<FaCheck size={24} />
					</button>
				)}
			</div>
		</div>
	);
}

export default MenuItem;
