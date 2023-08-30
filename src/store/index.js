import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { mainReducer, setCurrentPath, setSearchSection, setIsSearchMenuOpen } from './slices/mainSlice';
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

export { store, setCurrentPath, setSearchSection, setIsSearchMenuOpen };
export {
  useFetchPopularMoviesQuery,
  useFetchMoviesQuery,
  useFetchMoviesBySearchTermQuery
} from './apis/moviesApi';
export { useFetchPopularSeriesQuery, useFetchSeriesBySearchTermQuery } from './apis/seriesApi';
export { useFetchBooksBySearchTermQuery } from './apis/booksApi';
