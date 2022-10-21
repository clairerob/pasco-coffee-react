import { COFFEES } from '../../app/shared/COFFEES';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    coffeesArray : COFFEES
};

const coffeesSlice = createSlice({
    name: 'coffees',
    initialState
});

export const coffeesReducer = coffeesSlice.reducer;

export const getCurrentCoffees = (state) => {
    return state.coffeesArray.filter(coffee => coffee.current);
};

export const getCurrentCoffeesByCountry = (countryName) => (state) => {
    return state.COFFEES.filter(coffee => coffee.current && coffee.country === countryName);
};

// export const getCurrentCoffeeCountries = () => {
//     return COFFEES.reduce((acc, cur) => {
//         if (cur.current) return [...acc, cur.country];
//         return acc;
//     }, [])
// };
