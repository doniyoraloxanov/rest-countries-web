import React, { useEffect } from "react";
import { fetchCountries } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useThunk } from "../hooks/use-thunk";
import { Link } from "react-router-dom";

const CountriesListPage = () => {
  const [doFetchCountries, isLoadingCountries, loadingCountriesError] =
    useThunk(fetchCountries);

  useEffect(() => {
    doFetchCountries();
  }, []);

  const { data } = useSelector((state) => {
    return state.countries;
  });

  const renderedCountries = data.map((country, index) => {
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
    <div className="grid  md:grid-cols-3 md:gap-8   lg:grid-cols-4 lg:gap-16 max-w-[300px] md:max-w-[800px] lg:max-w-[1400px] mx-auto gap-y-8">
      {renderedCountries}
    </div>
  );
};

export default CountriesListPage;
