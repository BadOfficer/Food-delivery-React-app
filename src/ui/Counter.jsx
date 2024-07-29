/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import {
	decItem,
	getQuantitiesById,
	incItem,
} from '../features/cart/cartSlice';

function Counter({ dishID }) {
	const itemQuantity = useSelector(getQuantitiesById(dishID));
	const dispatch = useDispatch();
	const styles = 'px-2 py-1 bg-typeFaded/30';

	const handleInc = () => {
		dispatch(incItem(dishID));
	};

	const handleDec = () => {
		dispatch(decItem(dishID));
	};

	return (
		<div className='flex items-center gap-3'>
			<button onClick={handleDec} className={`rounded-l-xl ${styles}`}>
				-
			</button>
			{itemQuantity}
			<button onClick={handleInc} className={`rounded-r-xl ${styles}`}>
				+
			</button>
		</div>
	);
}

export default Counter;
