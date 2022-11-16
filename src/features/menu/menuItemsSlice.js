import { MENU_ITEMS } from '../../app/shared/MENU_ITEMS';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    menuItemsArray: MENU_ITEMS
};

const menuItemsSlice = createSlice({
    name: 'menuItems',
    initialState,
});

export const menuItemsReducer = menuItemsSlice.reducer;

// export const getAllMenuItems = () => {
//     return MENU_ITEMS;
// };

export const getFeaturedMenuItems = (state) => {
    return state.menuItems.menuItemsArray.filter((item) => item.featured);
};

export const getCurrentMenuItems = (state) => {
    return state.menuItems.menuItemsArray.filter((item) => item.current);
};
