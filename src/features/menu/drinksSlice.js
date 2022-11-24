import sanityClient from '../../client'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchDrinks = createAsyncThunk('drinks/fetchDrinks', async () => {
	const response = await sanityClient.fetch(
		`*[_type == "drinks"]{
                _id,
                current,
                featured,
                drinkPrice,
                drinkDescription,
                drinkName,
                drinkImage{
                    asset->{
                        _id,
                        url
                    },
                },
            }`
	)
	if (!response) {
		return Promise.reject('unable to fetch, status: ' + response.status)
	}
	console.log(response)
	return response
})

const initialState = {
	drinksArray: [],
	isLoading: true,
	errMsg: '',
}

const drinksSlice = createSlice({
	name: 'drinks',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchDrinks.pending]: (state) => {
			state.isLoading = true
		},
		[fetchDrinks.fulfilled]: (state, action) => {
			state.isLoading = false
			state.errMsg = ''
			state.drinksArray = action.payload
		},
		[fetchDrinks.rejected]: (state, action) => {
			state.isLoading = false
			state.errMsg = action.error ? action.error.message : 'Fetch failed'
		},
	},
})

export const drinksReducer = drinksSlice.reducer

export const getAllDrinks = (state) => {
	return state.drinks.drinksArray
}

export const getFeaturedDrinks = (state) => {
	return {
		featuredDrinks: state.drinks.drinksArray.filter((drink) => drink.featured),
		isLoading: state.drinks.isLoading,
		errMsg: state.drinks.errMsg,
	}
}

export const getCurrentDrinks = (state) => {
	return {
		currentDrinks: state.drinks.drinksArray.filter((drink) => drink.current),
		isLoading: state.drinks.isLoading,
		errMsg: state.drinks.errMsg,
	}
}
