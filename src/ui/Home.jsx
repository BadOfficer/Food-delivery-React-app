import { useSelector } from 'react-redux';
import UserForm from '../features/user/UserForm';
import SolidButton from './SolidButton';

function Home() {
	const username = useSelector((state) => state.user.username);

	return (
		<div className='bg-highlight col-span-4 w-full justify-center items-center flex flex-col gap-6'>
			<h1 className='text-3xl font-bold'>
				Welcome, to <i className='text-accent'>YumDash</i>
			</h1>
			{!username ? (
				<UserForm />
			) : (
				<SolidButton
					to={'/menu'}
					className='hover:bg-accentHover text-xl rounded-xl'
				>
					Continue ordering, {username}
				</SolidButton>
			)}
		</div>
	);
}

export default Home;
