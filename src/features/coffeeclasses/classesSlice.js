import { WORKSHOPS } from '../../app/shared/WORKSHOPS';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    classesArray: WORKSHOPS
};

const classesSlice = createSlice({
    name: 'classes',
    initialState
});

export const classesReducer = classesSlice.reducer;

export const getAllClasses = (state) => {
    return state.classes.classesArray;
};