import sanityClient from '../../client'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchClasses = createAsyncThunk(
	'classes/fetchClasses',
	async () => {
		const response = await sanityClient.fetch(
			`*[_type == "classes"]{
                _id,
                date,
                availability,
				name,
				classTitle,
                type->{
                    name,
                    description,
                    classImage{
                        asset->{
                        _id,
                        url
                        },
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
	classesArray: [],
	isLoading: true,
	errMsg: '',
}

const classesSlice = createSlice({
	name: 'classes',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchClasses.pending]: (state) => {
			state.isLoading = true
		},
		[fetchClasses.fulfilled]: (state, action) => {
			state.isLoading = false
			state.errMsg = ''
			state.classesArray = action.payload
		},
		[fetchClasses.rejected]: (state, action) => {
			state.isLoading = false
			state.errMsg = action.error ? action.error.message : 'Fetch failed'
		},
	},
})

export const classesReducer = classesSlice.reducer

export const getAllClasses = (state) => {
	return state.classes.classesArray
}
