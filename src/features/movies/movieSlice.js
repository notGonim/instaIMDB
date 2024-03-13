import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../common/APIs/movieAPI";
import { API_KEY } from "../../common/APIs/movieAPIKey";

const initialState = {
  movies: {
    movies: [],
    totalResults: 0,
  },
  movie: {
    movie: {},
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
      })
      .addCase(getMovieById.pending, (state, action) => {
        state.movie.movie = {};
      })
      .addCase(getMovieById.fulfilled, (state, action) => {
        state.movie.movie = action.payload;
      })
      .addCase(getMovieById.rejected, (state, action) => {
        state.movie.movie = {};
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

export const getMovieById = createAsyncThunk(
  "movies/getMovieById",
  async (payload) => {
    console.log("Payload: ", payload);
    const res = await movieAPI
      .get(`?apikey=${API_KEY}&i=${payload.id}&plot=full`)
      .catch((err) => console.log("Error: ", err));
    return res.data;
  }
);

export const selectMovies = (state) => state.movies.movies.movies;
export const selectMovie = (state) => state.movies.movie.movie;
export default movieSlice.reducer;
