import { createSlice } from '@reduxjs/toolkit';

const movieBookIdSlice = createSlice({
  name: 'movieBookId',
  initialState: {
    openedMovieId: 0,
    openedSerieId: 0,
    openedBookId: 0,
  },
  reducers: {
    setOpenedMovieId(state, action) {
      state.openedMovieId = action.payload;
    },
    setOpenedSerieId(state, action) {
      state.openedSerieId = action.payload;
    },
    setOpenedBookId(state, action) {
      state.openedBookId = action.payload;
    }
  }
});

export const movieBookIdReducer = movieBookIdSlice.reducer;
export const { setOpenedMovieId, setOpenedSerieId, setOpenedBookId } = movieBookIdSlice.actions;
