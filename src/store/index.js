import { configureStore } from '@reduxjs/toolkit';
import { mainReducer, setCurrentPath } from './slices/mainSlice';

const store = configureStore({
  reducer: {
    mainReducer
  }
});

export { store, setCurrentPath };
