import { configureStore } from "@reduxjs/toolkit";
import { countriesReducer } from "./slices/countriesSlice";
import { detailsReducer } from "./slices/countriesSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    details: detailsReducer,
  },
});

export * from "./thunks/fetchCountries";
export * from "./thunks/fetchCountriesDetails";
