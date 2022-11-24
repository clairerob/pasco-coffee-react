import { configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import { classesReducer } from '../features/coffeeclasses/classesSlice'
import { coffeesReducer } from '../features/coffeemap/coffeesSlice'
import { drinksReducer } from '../features/menu/drinksSlice'
import { roasteriesReducer } from '../features/roasteries/roasteriesSlice'

export const store = configureStore({
	reducer: {
		classes: classesReducer,
		coffees: coffeesReducer,
		drinks: drinksReducer,
		roasteries: roasteriesReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
})
