/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

function SearchProvider({ children }) {
	const [search, setSearch] = useState('');

	return (
		<SearchContext.Provider value={{ search, setSearch }}>
			{children}
		</SearchContext.Provider>
	);
}

function useSearch() {
	const context = useContext(SearchContext);

	if (context === undefined)
		throw new Error('Search Context uses outside the Search Provider');

	return context;
}

export { SearchProvider, useSearch };
