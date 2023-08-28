import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { mainReducer, setCurrentPath } from './slices/mainSlice';
import { moviesApi } from './apis/moviesApi';
import { seriesApi } from './apis/seriesApi';
import { booksApi } from './apis/booksApi';

const store = configureStore({
  reducer: {
    mainReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [seriesApi.reducerPath]: seriesApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware()
      .concat(moviesApi.middleware)
      .concat(seriesApi.middleware)
      .concat(booksApi.middleware)
  }
});

setupListeners(store.dispatch);

export { store, setCurrentPath };
export { useFetchPopularMoviesQuery, useFetchMoviesQuery } from './apis/moviesApi';
export { useFetchPopularSeriesQuery } from './apis/seriesApi';
export { useFetchJavaScriptBooksQuery } from './apis/booksApi';
