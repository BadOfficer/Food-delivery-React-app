import { useDispatch, useSelector } from 'react-redux';
import SolidButton from '../../ui/SolidButton';
import CartItem from './CartItem';
import { clearCart, getTotalCartPrice, setPriority } from './cartSlice';

function Cart() {
	const cart = useSelector((state) => state.cart.cart);
	const totalCartPrice = useSelector(getTotalCartPrice);
	const priorityPrice = useSelector((state) => state.cart.priorityPrice);

	const dispatch = useDispatch();

	const handleClear = () => {
		dispatch(clearCart());
	};

	if (cart.length === 0)
		return (
			<p className='text-xl flex justify-center items-center h-full'>
				Your cart is still empty.
			</p>
		);

	return (
		<div className='flex flex-col justify-between cart border-l-2 border-typeFaded/30'>
			<div className='cart flex-1'>
				{cart.map((item, index) => (
					<CartItem
						title={item.title}
						id={item.id}
						price={item.price}
						index={index + 1}
						key={item.id}
					/>
				))}
			</div>
			<div>
				<div className='px-2 py-2'>
					<div className='bg-highlight flex justify-center py-3 rounded-xl text-lg gap-2'>
						<input
							type='checkbox'
							name='priority'
							id='priority'
							className='w-4 cursor-pointer'
							checked={priorityPrice !== 0}
							onChange={(e) =>
								dispatch(
									setPriority(e.target.checked ? totalCartPrice * 0.2 : 0)
								)
							}
						/>
						<label htmlFor='priority' className='cursor-pointer'>
							Want to give your order priority?
						</label>
					</div>
				</div>
				<div className='bg-seperators p-3 text-base gap-2 flex flex-col'>
					<div className='flex justify-between'>
						Subtotal <b>${totalCartPrice.toFixed(2)}</b>
					</div>
					<div className='flex justify-between'>
						Priority <b>${priorityPrice.toFixed(2)}</b>
					</div>
					<div className='flex justify-between text-xl'>
						Total
						<b className='text-accent'>
							${(totalCartPrice + priorityPrice).toFixed(2)}
						</b>
					</div>
					<div className='flex justify-center gap-5'>
						<SolidButton
							onClick={handleClear}
							className='hover:bg-accentHover text-xl rounded-xl'
						>
							Clear
						</SolidButton>
						<SolidButton className='bg-pop text-xl rounded-xl' to={'new-order'}>
							Continue
						</SolidButton>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
