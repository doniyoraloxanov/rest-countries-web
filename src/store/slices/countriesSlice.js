import { createSlice } from "@reduxjs/toolkit";
import { fetchCountries } from "../thunks/fetchCountries";

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

export const countriesReducer = countriesSlice.reducer;
