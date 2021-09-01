import { configureStore } from '@reduxjs/toolkit';
import catalogueReducer from '../features/catalogue/Reducer/catalogueSlice';

export const store = configureStore({
  reducer: {
    catalogue: catalogueReducer,
  },
});
