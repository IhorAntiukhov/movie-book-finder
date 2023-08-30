import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    currentPath: '/',
    searchSection: 'movies',
    isSearchMenuOpen: 0
  },
  reducers: {
    setCurrentPath(state, action) {
      state.currentPath = action.payload;
    },
    setSearchSection(state, action) {
      state.searchSection = action.payload;
    },
    setIsSearchMenuOpen(state, action) {
      state.isSearchMenuOpen = action.payload;
    }
  }
});

export const mainReducer = mainSlice.reducer;
export const { setCurrentPath, setSearchSection, setIsSearchMenuOpen } = mainSlice.actions;
