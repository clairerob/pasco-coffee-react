import sanityClient from '../../client'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchClassTypes = createAsyncThunk(
	'classTypes/fetchClassTypes',
	async () => {
		const response = await sanityClient.fetch(
			`*[_type == "classTypes"]{
                _id,
                title,
				name,
                description,
                classImage{
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
	classTypesArray: [],
	isLoading: true,
	errMsg: '',
}

const classTypesSlice = createSlice({
	name: 'classTypes',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchClassTypes.pending]: (state) => {
			state.isLoading = true
		},
		[fetchClassTypes.fulfilled]: (state, action) => {
			state.isLoading = false
			state.errMsg = ''
			state.classTypesArray = action.payload
		},
		[fetchClassTypes.rejected]: (state, action) => {
			state.isLoading = false
			state.errMsg = action.error ? action.error.message : 'Fetch failed'
		},
	},
})

export const classTypesReducer = classTypesSlice.reducer

export const getAllClassTypes = (state) => {
	return state.classTypes.classTypesArray
}
