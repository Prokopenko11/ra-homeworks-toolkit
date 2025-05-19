import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMovie = createAsyncThunk(
  'searchMovie/fetchMovie',
  async (searchTerm) => {
    const response = await fetch(`https://www.omdbapi.com?apikey=64405bd2&s=${searchTerm}`);
    const data = await response.json();
    return data;
  }
)

const searchMovieSlice = createSlice({
  name: 'searchMovie',
  initialState: {
    movies: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.Search || [];
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
})

export default searchMovieSlice.reducer;