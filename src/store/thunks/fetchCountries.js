import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchCountries = createAsyncThunk("countries/fetch", async () => {
  const response = await fetch(
    `https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags`
  );
  const data = await response.json();

  return data;
});

export { fetchCountries };
