import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    list: []
  },
  reducers: {
    addFavorite: (state, action) => {
      const movie = action.payload;
      const exists = state.list.find(m => m.imdbID === movie.imdbID);
      if (!exists) {
        state.list.push(movie);
      }
    },
    removeFavorite: (state, action) => {
      const movie = action.payload;
      state.list = state.list.filter(m => m.imdbID !== movie.imdbID);
    }
  }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;