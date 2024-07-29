import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cart: [],
	priorityPrice: 0,
};

const cartSlice = createSlice({
	initialState: initialState,
	name: 'cart',
	reducers: {
		addItem(state, action) {
			state.cart.push(action.payload);
		},
		removeItem(state, action) {
			state.cart = state.cart.filter((item) => item.id !== action.payload);
		},
		clearCart(state) {
			state.cart = [];
		},
		incItem(state, action) {
			const item = state.cart.find((item) => item.id === action.payload);

			item.quantity++;
			item.total = item.quantity * item.price;
		},
		decItem(state, action) {
			const item = state.cart.find((item) => item.id === action.payload);

			item.quantity--;
			item.total = item.quantity * item.price;

			if (item.quantity === 0) cartSlice.caseReducers.removeItem(state, action);
		},
		setPriority(state, action) {
			state.priorityPrice = action.payload;
		},
	},
});

export const { addItem, removeItem, clearCart, incItem, decItem, setPriority } =
	cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartPrice = (state) =>
	state.cart.cart.reduce((sum, item) => sum + item.total, 0);

export const getQuantitiesById = (id) => (state) =>
	state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;

export const getTotal = (state) =>
	state.cart.cart.reduce((sum, item) => sum + item.total, 0) +
	state.cart.priorityPrice;

// 'reselect'
