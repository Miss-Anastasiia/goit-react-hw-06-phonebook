import { createSlice } from '@reduxjs/toolkit';

const filetrSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, action) {
      return action.payload;
    },
  },
});

export const { filterContacts } = filetrSlice.actions;
export const filterReducer = filetrSlice.reducer;


export const getFilterValue = state => state.filter;
