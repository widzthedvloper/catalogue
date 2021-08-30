/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCatalogue } from './catalogueAPI';

const mydata = [{
  id: 654959,
  title: 'Pasta With Tuna',
  image: 'https://spoonacular.com/recipeImages/654959-312x231.jpg',
  imageType: 'jpg',
}];
const initialState = {
  value: mydata,
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
    fecthingCatalogue: (state, action) => {
      state.value = action.payload;
    },
    filterCatalogue: state => {
      state.value = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAsync.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const { fetchingCatalogue, filterCatalogue } = catalogueSlice.actions;

export const selectCatalogue = state => state.catalogue.value;

export default catalogueSlice.reducer;
