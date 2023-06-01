import { createSlice } from "@reduxjs/toolkit";
import { fetchCountries } from "../thunks/fetchCountries";
import { fetchCountriesDetails } from "../thunks/fetchCountriesDetails";

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },

  extraReducers(builder) {
    builder.addCase(fetchCountries.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

const detailsSlice = createSlice({
  name: "details",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },

  extraReducers(builder) {
    builder.addCase(fetchCountriesDetails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCountriesDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCountriesDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const countriesReducer = countriesSlice.reducer;
export const detailsReducer = detailsSlice.reducer;

// https://restcountries.com/v3.1/name/{name}
