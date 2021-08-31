import { configureStore } from '@reduxjs/toolkit';
import catalogueReducer from '../features/catalogue/catalogueSlice';

export const store = configureStore({
  reducer: {
    catalogue: catalogueReducer,
  },
});
