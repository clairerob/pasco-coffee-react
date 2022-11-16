import { ROASTERIES } from '../../app/shared/ROASTERIES';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    roasteriesArray: ROASTERIES,
};

const roasteriesSlice = createSlice({
    name: 'roasteries',
    initialState
});

export const roasteriesReducer = roasteriesSlice.reducer;

export const getAllRoasteries = (state) => {
    return state.roasteries.roasteriesArray;
};

export const getFeaturedRoasteries = (state) => {
    return state.roasteries.roasteriesArray.filter(roastery => roastery.featured);
};