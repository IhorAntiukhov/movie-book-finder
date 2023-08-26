import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { mainReducer, setCurrentPath } from './slices/mainSlice';
import { moviesApi } from './apis/moviesApi';

const store = configureStore({
  reducer: {
    mainReducer,
    [moviesApi.reducerPath]: moviesApi.reducer
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(moviesApi.middleware)
  }
});

setupListeners(store.dispatch);

export { store, setCurrentPath };
export { useFetchPopularMoviesQuery, useFetchMoviesQuery } from './apis/moviesApi';
