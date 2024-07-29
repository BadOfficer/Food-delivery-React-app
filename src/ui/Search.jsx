/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function Search({ onChange }) {
	const [searchValue, setSearchValue] = useState('');

	const handleChange = () => {
		onChange(searchValue);
	};

	useEffect(() => {
		if (searchValue === '') onChange('');
	}, [onChange, searchValue]);

	return (
		<div className='relative max-w-96 w-full flex'>
			<input
				type='text'
				className=' placeholder:text-typeDark bg-seperators py-3 text-base w-full h-full rounded-xl px-2 focus:outline-none outline:none focus:ring-0 focus:ring-offset-0'
				placeholder='Search products...'
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
			/>
			<button
				className='absolute right-2 top-2/4 translate-y-[-50%]'
				onClick={handleChange}
			>
				<FaSearch size={20} />
			</button>
		</div>
	);
}

export default Search;
