import sanityClient from '../../client'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchRoasteries = createAsyncThunk(
	'roasteries/fetchRoasteries',
	async () => {
		const response = await sanityClient.fetch(
			`*[_type == "roasteries"]{
                _id,
                featured,
                link,
                roasteryName,
                roasteryLogo{
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
	}
)

const initialState = {
	roasteriesArray: [],
	isLoading: true,
	errMsg: '',
}

const roasteriesSlice = createSlice({
	name: 'roasteries',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchRoasteries.pending]: (state) => {
			state.isLoading = true
		},
		[fetchRoasteries.fulfilled]: (state, action) => {
			state.isLoading = false
			state.errMsg = ''
			state.roasteriesArray = action.payload
		},
		[fetchRoasteries.rejected]: (state, action) => {
			state.isLoading = false
			state.errMsg = action.error ? action.error.message : 'Fetch failed'
		},
	},
})

export const roasteriesReducer = roasteriesSlice.reducer

export const getAllRoasteries = (state) => {
	return state.roasteries.roasteriesArray
}

export const getFeaturedRoasteries = (state) => {
	return {
		featuredItems: state.roasteries.roasteriesArray.filter(
			(roastery) => roastery.featured
		),
		isLoading: state.roasteries.isLoading,
		errMsg: state.roasteries.errMsg,
	}
}
