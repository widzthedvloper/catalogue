/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCatalogue } from '../API/catalogueAPI';

const initialState = {
  value: [],
  status: 'idle',
};

export const fetchAsync = createAsyncThunk(
  'catalogue/fetchCatalogue',
  async () => {
    const response = await fetchCatalogue();
    return response;
  },
);

export const catalogueSlice = createSlice({
  name: 'catalogue',
  initialState,
  reducers: {
    filterCatalogue: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAsync.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const { filterCatalogue } = catalogueSlice.actions;

export const selectCatalogue = state => state.catalogue.value;

export default catalogueSlice.reducer;
