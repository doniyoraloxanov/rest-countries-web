import React, { useEffect } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
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
    <div className=" flex justify-center pt-20 lg:justify-normal  lg:pt-32  relative ">
      <article className="lg:flex lg:space-x-48">
        <Link to="/">
          <button className="bg-white px-12 py-1.5 rounded-md absolute top-0  lg:left-[190px] flex items-center space-x-2">
            <GoArrowLeft className=" text-xl" /> <span>Back</span>
          </button>
        </Link>
        <img
          src={countryData?.flags?.png}
          className="w-[350px] h-[250px] mb-8  lg:w-[500px] lg:h-[350px] "
        />
        <div className="lg:pt-6">
          <h1 className="text-2xl font-bold mb-4">
            {countryData?.name?.common}
          </h1>
          {/* Container Main */}
          <div className="lg:flex lg:space-x-14">
            <div className="flex flex-col space-y-2 mb-10">
              <div>
                {countryData && (
                  <div className="flex space-x-2">
                    <p className="text-md font-medium">Native Name:</p>
                    <span>
                      {Object.entries(countryData.name.nativeName)[0][1].common}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex space-x-2">
                <p className="text-md font-medium">Population:</p>
                <p>{countryData?.population}</p>
              </div>

              <div className="flex space-x-2">
                <p className="text-md font-medium">Region:</p>
                <p>{countryData?.region}</p>
              </div>

              <div className="flex space-x-2">
                <p className="text-md font-medium">Subregion:</p>
                <p>{countryData?.subregion}</p>
              </div>

              <div className="flex space-x-2">
                <p className="text-md font-medium">Capital:</p>
                <p>{countryData?.capital}</p>
              </div>
            </div>
            {/* Second Container */}
            <div className="flex flex-col space-y-2 mb-10">
              <div className="flex space-x-2">
                <p className="text-md font-medium">Top Level Domain:</p>
                <p>{countryData?.altSpellings[0].toLowerCase()}</p>
              </div>

              <div className="flex space-x-2">
                <p className="text-md font-medium">Currencies:</p>
                {countryData && (
                  <span>
                    {Object.entries(countryData.currencies)[0][1].name}
                  </span>
                )}
              </div>

              <div className="flex space-x-2">
                <p className="text-md font-medium">Languages:</p>
                {countryData && (
                  <p>
                    {Object.values(countryData?.languages).map(
                      (lang, index) => (
                        <span key={index}>{lang}, </span>
                      )
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* Border Countries */}

          <div>
            <p className="text-lg font-medium mb-2">Border Countries:</p>
            <span className="flex space-x-4  flex-wrap ">
              {countryData?.borders.map((border, index) => {
                return (
                  <div className="bg-white px-8 rounded-md" key={index}>
                    {border ? (
                      border.toLowerCase()
                    ) : (
                      <div>No border countries</div>
                    )}
                  </div>
                );
              })}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CountriesDetailPage;

// {Object.values(data.name.nativeName).map((name) => (
//   <span key={name.common}>
//     {name.official} ({name.common})
//   </span>
