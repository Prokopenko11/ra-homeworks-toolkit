import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMovieById = createAsyncThunk(
  'movieDetails/fetchMovieById',
  async (id) => {
    const response = await fetch(`https://www.omdbapi.com?apikey=64405bd2&i=${id}`);
    const data = await response.json();
    return data;
  }
)

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState: {
    movie: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.loading = false;
        state.movie = action.payload;
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
})

export default movieDetailsSlice.reducer;