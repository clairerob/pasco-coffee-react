import { configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import { classesReducer } from '../features/coffeeclasses/classesSlice'
import { coffeesReducer } from '../features/coffeemap/coffeesSlice'
import { menuItemsReducer } from '../features/menu/menuItemsSlice'
import { roasteriesReducer } from '../features/roasteries/roasteriesSlice'

export const store = configureStore({
	reducer: {
		classes: classesReducer,
		coffees: coffeesReducer,
		menuItems: menuItemsReducer,
		roasteries: roasteriesReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
})
