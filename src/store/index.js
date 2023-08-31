import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {
  navigationReducer, setCurrentPath, setSearchSection, setIsSearchMenuOpen, setOpenedMovieBookId
} from './slices/navigationSlice';
import {
  movieBookIdReducer, setOpenedMovieId, setOpenedSerieId, setOpenedBookId
} from './slices/movieBookIdSlice';
import { moviesApi } from './apis/moviesApi';
import { seriesApi } from './apis/seriesApi';
import { booksApi } from './apis/booksApi';

const store = configureStore({
  reducer: {
    navigationReducer,
    movieBookIdReducer,
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

export {
  store, setCurrentPath, setSearchSection, setIsSearchMenuOpen,
  setOpenedMovieBookId, setOpenedMovieId, setOpenedSerieId, setOpenedBookId
};
export {
  useFetchPopularMoviesQuery,
  useFetchMoviesQuery,
  useFetchMoviesBySearchTermQuery,
  useFetchMovieDetailsQuery,
  useFetchMovieCastQuery
} from './apis/moviesApi';
export {
  useFetchPopularSeriesQuery,
  useFetchSeriesBySearchTermQuery,
  useFetchSerieCastQuery
} from './apis/seriesApi';
export {
  useFetchBooksBySearchTermQuery,
  useFetchBookByIdQuery
} from './apis/booksApi';
