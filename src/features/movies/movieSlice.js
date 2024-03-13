import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../common/APIs/movieAPI";
import { API_KEY } from "../../common/APIs/movieAPIKey";

const initialState = {
  movies: {
    movies: [],
    totalResults: 0,
  },
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMovies: (state, action) => {
      state.movies.movies = action.payload.Search;
      state.movies.totalResults = action.payload.totalResults;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.movies.movies = action.payload.Search;
        state.movies.totalResults = action.payload.totalResults;
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        state.movies.movies = [];
        state.movies.totalResults = 0;
      })
      .addCase(getAllShows.pending, (state, action) => {
        state.movies.movies = [];
        state.movies.totalResults = 0;
      })
      .addCase(getAllShows.fulfilled, (state, action) => {
        state.movies.movies = action.payload.Search;
        state.movies.totalResults = action.payload.totalResults;
      })
      .addCase(getAllShows.rejected, (state, action) => {
        state.movies.movies = [];
        state.movies.totalResults = 0;
      });
  },
});

export const getAllMovies = createAsyncThunk(
  "movies/getAllMovies",
  async (payload) => {
    const res = await movieAPI
      .get(`?apikey=${API_KEY}&s=${payload.movieText}&type=movie`)
      .catch((err) => console.log("Error: ", err));
    return res.data;
  }
);

export const getAllShows = createAsyncThunk(
  "movies/getAllShows",
  async (payload) => {
    const res = await movieAPI
      .get(`?apikey=${API_KEY}&s=${payload.movieText}&type=series`)
      .catch((err) => console.log("Error: ", err));
    return res.data;
  }
);

export const selectMovies = (state) => state.movies.movies.movies;
export default movieSlice.reducer;
