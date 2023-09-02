import { createSlice } from '@reduxjs/toolkit';

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {
    fullName: {
      firstName: null,
      lastName: null,
    },
    moviesWatchList: [],
    seriesWatchList: [],
    booksReadingList: []
  },
  reducers: {
    setFullName(state, action) {
      state.fullName = action.payload;
    },

    addMovieToWatchList(state, action) {
      state.moviesWatchList.push(action.payload);
    },
    addSerieToWatchList(state, action) {
      state.seriesWatchList.push(action.payload);
    },
    addBookToReadingList(state, action) {
      state.booksReadingList.push(action.payload);
    },

    removeMovieFromWatchList(state, action) {
      state.moviesWatchList.filter((movie) => movie.id !== action.payload);
    },
    removeSerieFromWatchList(state, action) {
      state.seriesWatchList.filter((serie) => serie.id !== action.payload);
    },
    removeBookFromReadingList(state, action) {
      state.booksReadingList.filter((book) => book.id !== action.payload);
    }
  }
});

export const userProfileReducer = userProfileSlice.reducer;
export const {
  setFullName, addMovieToWatchList, addSerieToWatchList, addBookToReadingList,
  removeMovieFromWatchList, removeSerieFromWatchList, removeBookFromReadingList
} = userProfileSlice.actions;
