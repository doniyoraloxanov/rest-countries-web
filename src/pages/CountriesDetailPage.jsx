import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useThunk } from "../hooks/use-thunk";
import { fetchCountriesDetails } from "../store";

const CountriesDetailPage = () => {
  const params = useParams();
  const [doFetchDetials, isloadingDetails, loadingDetailsError] = useThunk(
    fetchCountriesDetails
  );

  useEffect(() => {
    doFetchDetials();
  }, []);

  // const jobData = data.find((job) => job.id == params.id);

  const { data } = useSelector((state) => {
    return state.details;
  });

  const countryData = data.find((country) => country.name.common == params.id);
  console.log(countryData);
  return (
    <div className="max-w-6xl flex  justify-center">
      <article>
        <img src={countryData?.flags?.png} className="w-[350px] h-[250px]" />
        <h1 className="text-2xl font-bold">{countryData?.name?.common}</h1>
        <div>
          <p>Native Name</p>
          <p>{countryData?.nativeName}</p>
        </div>
      </article>
    </div>
  );
};

export default CountriesDetailPage;
