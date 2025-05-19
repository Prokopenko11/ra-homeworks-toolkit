import { configureStore } from '@reduxjs/toolkit';
import searchMovieReducer from './slices/searchMovieSlice';
import movieDetailsReducer from './slices/movieDetailsSlice';
import favoritesReducer from './slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    searchMovie: searchMovieReducer,
    movieDetails: movieDetailsReducer,
    favorites: favoritesReducer,
  }
})