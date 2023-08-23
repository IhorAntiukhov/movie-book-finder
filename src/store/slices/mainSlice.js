import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    currentPath: '/'
  },
  reducers: {
    setCurrentPath(state, action) {
      return { ...state, currentPath: action.payload };
    }
  }
});

export const mainReducer = mainSlice.reducer;
export const { setCurrentPath } = mainSlice.actions;
