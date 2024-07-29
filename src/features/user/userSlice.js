import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../utils/getAddress';

function getPosition() {
	return new Promise(function (resolve, reject) {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
}

export const fetchAddress = createAsyncThunk('user/address', async function () {
	const positionObj = await getPosition();
	const position = {
		latitude: positionObj.coords.latitude,
		longitude: positionObj.coords.longitude,
	};

	const addressObj = await getAddress(position);
	const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

	return { position, address };
});

const initialState = {
	username: '',
	status: 'idle',
	position: '',
	address: '',
	errors: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		updateUsername(state, action) {
			state.username = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAddress.fulfilled, (state, action) => {
			state.status = 'idle';
			state.address = action.payload.address;
			state.position = action.payload.position;
		});

		builder.addCase(fetchAddress.pending, (state) => {
			state.status = 'loading';
		});

		builder.addCase(fetchAddress.rejected, (state, action) => {
			state.errors = action.error.message;
			state.status = 'error';
		});
	},
});

export const { updateUsername } = userSlice.actions;

export default userSlice.reducer;
