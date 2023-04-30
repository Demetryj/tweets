import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constatnts';

const initialState = { status: statusFilters.all };

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { changeStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
