import React, { useEffect, useState } from "react";
import { fetchCountries } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useThunk } from "../hooks/use-thunk";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const CountriesListPage = () => {
  const [title, setTitle] = useState("");
  const [doFetchCountries, isLoadingCountries, loadingCountriesError] =
    useThunk(fetchCountries);

  useEffect(() => {
    doFetchCountries();
  }, []);

  const { data } = useSelector((state) => {
    return state.countries;
  });

  const getValue = (title) => {
    setTitle(title);
  };

  const result = data.filter((country) => {
    return country.name.common.toLowerCase().includes(title.toLowerCase());
  });

  const renderedCountries = result.map((country, index) => {
    return (
      <div key={index} className="flex flex-col bg-white shadow-lg">
        <Link to={`/details/${country.name.common}`}>
          <img src={country.flags.png} className="mb-4 w-[384px] h-[150px] " />
          <div className="mx-6 pb-8 ">
            <h1 className="text-[18px] font-bold  mb-3">
              {country.name.common}
            </h1>
            <div className="flex  flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <p className=" text-md font-medium">Population</p>
                <p>{country.population}</p>
              </div>
              <div className="flex items-center space-x-2">
                <p className=" text-md font-medium ">Region</p>
                <p>{country.region}</p>
              </div>
              <div className="flex items-center space-x-2">
                <p className=" text-md font-medium">Capital</p>
                <p>{country.capital}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center lg:items-start">
      <div className=" mb-24 lg:ml-36">
        <SearchBar onSearch={getValue} />
      </div>

      <div className="grid  md:grid-cols-3 md:gap-8   gap-y-8 lg:grid-cols-4 lg:gap-16 max-w-[300px] md:max-w-[800px] lg:max-w-[1400px] mx-auto">
        {renderedCountries}
      </div>
    </div>
  );
};

export default CountriesListPage;
