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

export const getFeaturedMenuItems = () => {
    return MENU_ITEMS.filter(item => item.featured);
};

export const getCurrentMenuItems = () => {
    return MENU_ITEMS.filter(item => item.current);
};
