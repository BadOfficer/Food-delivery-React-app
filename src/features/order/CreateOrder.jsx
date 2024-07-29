import { createDefaultMaskGenerator, MaskedInput } from 'react-hook-mask';
import { useDispatch, useSelector } from 'react-redux';
import { Form, redirect, useNavigate, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/getMenu';
import store from '../../store';
import Input from '../../ui/Input';
import SolidButton from '../../ui/SolidButton';
import { clearCart, getCart, getTotal } from '../cart/cartSlice';
import { fetchAddress } from '../user/userSlice';

const maskGenerator = createDefaultMaskGenerator('+38 (999) 99-99-999');

function CreateOrder() {
	const navigate = useNavigate();
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const cart = useSelector(getCart);
	const totalPrice = useSelector(getTotal);
	const { position: userPosition, address: userAddress } = useSelector(
		(state) => state.user
	);

	const submitting = navigation.state === 'submitting';

	const handleBack = (e) => {
		e.preventDefault();
		navigate(-1);
	};

	const handleGetAddress = (e) => {
		e.preventDefault();
		dispatch(fetchAddress());
	};

	return (
		<>
			<div className='flex flex-col items-center gap-5 p-3'>
				<h2 className='text-center text-2xl font-bold'>Ready to order?</h2>
				<Form className='flex flex-col gap-5' method='POST'>
					<div className='text-xl flex gap-3 items-center'>
						<label htmlFor='username' className='flex-1'>
							Username:
						</label>
						<Input
							id='username'
							name='username'
							placeholder='Input your full name'
							defaultValue={'Taras'}
							className='border-2 border-accent placeholder:text-base'
							required={true}
						/>
					</div>
					<div className='text-xl flex gap-3 items-center'>
						<label htmlFor='phone' className='flex-1'>
							Phone:
						</label>
						<MaskedInput
							id='phone'
							name='phone'
							type='tel'
							placeholder='Input your phone'
							className='border-2 border-accent placeholder:text-base px-3 min-w-80 py-2 rounded-xl placeholder:text-typeDark/60'
							required={true}
							maskGenerator={maskGenerator}
						/>
					</div>
					<div className='text-xl flex gap-3 items-center relative'>
						<label htmlFor='address' className='flex-1'>
							Address:
						</label>
						<Input
							id='address'
							name='address'
							placeholder='Input your address'
							className='border-2 border-accent placeholder:text-base'
							required={true}
							defaultValue={userAddress}
						/>

						{!userPosition.latitude && !userPosition.longitude && (
							<div className='absolute right-2'>
								<SolidButton
									className='px-1.5 py-1 text-sm rounded-lg hover:bg-accentHover'
									onClick={handleGetAddress}
								>
									Get position
								</SolidButton>
							</div>
						)}
					</div>
					<div className='flex justify-between font-bold border-y-2 border-typeFaded/30 py-3'>
						<span className='text-accent'>Total:</span> ${totalPrice.toFixed(2)}
					</div>
					<div className='flex justify-center gap-5'>
						<input
							type='hidden'
							defaultValue={JSON.stringify(cart)}
							name='cart'
						/>
						<input type='hidden' defaultValue={totalPrice} name='total' />
						<SolidButton
							onClick={(e) => handleBack(e)}
							className='text-xl rounded-xl hover:bg-accentHover'
						>
							Go Back
						</SolidButton>
						<SolidButton className='text-xl rounded-xl bg-pop'>
							{submitting ? 'Placing order...' : 'Place order'}
						</SolidButton>
					</div>
				</Form>
			</div>
		</>
	);
}

export async function action({ request }) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	const order = {
		...data,
		cart: JSON.parse(data.cart),
	};

	await createOrder(order);

	store.dispatch(clearCart());

	return redirect('/menu');
}

export default CreateOrder;
