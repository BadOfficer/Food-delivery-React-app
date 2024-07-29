import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../../ui/Input';
import SolidButton from '../../ui/SolidButton';
import { updateUsername } from './userSlice';

function UserForm() {
	const [username, setUsername] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!username) return;

		dispatch(updateUsername(username));
		navigate('/menu');
	};

	return (
		<form className='flex flex-col gap-6 items-center' onSubmit={handleSubmit}>
			<div className='text-xl flex gap-3 items-center'>
				<label htmlFor='username'>
					Enter your <i className='text-accent'>name</i> to get started:
				</label>
				<Input
					name='username'
					id='username'
					placeholder='Your full name'
					value={username}
					onChange={setUsername}
				/>
			</div>
			{username && (
				<SolidButton className='hover:bg-accentHover text-xl rounded-xl'>
					Start ordering
				</SolidButton>
			)}
		</form>
	);
}

export default UserForm;
