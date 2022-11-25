import sanityClient from '../../client'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCoffees = createAsyncThunk('drinks/fetchCoffes', async () => {
	const response = await sanityClient.fetch(
		`*[_type == "coffees"]{
            _id,
            coffeeName,
            roastery,
            country,
            description,
            v60Price,
            current
        }`
	)
	if (!response) {
		return Promise.reject('unable to fetch, status: ' + response.status)
	}
	console.log(response)
	return response
})

const initialState = {
	coffeesArray: [],
	isLoading: true,
	errMsg: '',
}

const coffeesSlice = createSlice({
	name: 'coffees',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchCoffees.pending]: (state) => {
			state.isLoading = true
		},
		[fetchCoffees.fulfilled]: (state, action) => {
			state.isLoading = false
			state.errMsg = ''
			state.coffeesArray = action.payload
		},
		[fetchCoffees.rejected]: (state, action) => {
			state.isLoading = false
			state.errMsg = action.error ? action.error.message : 'Fetch failed'
		},
	},
})

export const coffeesReducer = coffeesSlice.reducer

export const getAllCoffees = (state) => {
	return state.coffees.coffeesArray
}

export const getCurrentCoffees = (state) => {
	return {
		currentCoffees: state.coffees.coffeesArray.filter(
			(coffee) => coffee.current
		),
		isLoading: state.coffees.isLoading,
		errMsg: state.coffees.errMsg,
	}
}

export const getCurrentCoffeesByCountry = (countryName) => (state) => {
	return {
		currentCoffeesByCountry: state.coffees.coffeesArray.filter(
			(coffee) => coffee.current && coffee.country === countryName
		),
		isLoading: state.coffees.isLoading,
		errMsg: state.coffees.errMsg,
	}
}

export const getCurrentCoffeeCountries = (state) => {
	return {
		currentCoffeeCountries: state.coffees.coffeesArray.reduce((acc, cur) => {
			if (!cur.current || acc.includes(cur.country)) {
				return acc
			}
			return [...acc, cur.country]
		}, []),
		isLoading: state.coffees.isLoading,
		errMsg: state.coffees.errMsg,
	}
}
