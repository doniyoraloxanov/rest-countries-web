import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchCountriesDetails = createAsyncThunk("details/fetch", async () => {
  const reponse = await fetch(
    `https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,currencies,languages,nativeName,subregion,currencies,languages,altSpellings,borders`
  );

  // const reponse = await fetch("https://restcountries.com/v3.1/all");

  const data = await reponse.json();
  return data;
});

export { fetchCountriesDetails };
