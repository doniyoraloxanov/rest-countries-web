import React, { useEffect } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useThunk } from "../hooks/use-thunk";
import { fetchCountriesDetails } from "../store";
import Dropdown from "../components/DropDown";

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
    <div className=" flex justify-center items-center pt-20 lg:justify-normal  lg:pt-32  relative  px-10">
      <article className=" lg:flex lg:space-x-40">
        <Link to="/">
          <button className="bg-white  px-12 py-1.5 rounded-md absolute top-0  lg:left-[160px] flex items-center space-x-2">
            <GoArrowLeft className=" text-xl" /> <span>Back</span>
          </button>
        </Link>
        <img
          src={countryData?.flags?.png}
          className="w-[350px] h-[250px] mb-8  lg:w-[600px] lg:h-[350px] "
        />
        <div className="lg:pt-6">
          <h1 className="text-2xl font-bold mb-4 dark:text-white">
            {countryData?.name?.common}
          </h1>
          {/* Container Main */}
          <div className="lg:flex lg:space-x-14">
            <div className="flex flex-col space-y-2 mb-10">
              <div>
                {countryData && (
                  <div className="flex space-x-2">
                    <p className="text-md font-medium  dark:text-gray-100">
                      Native Name:
                    </p>
                    <span className=" dark:text-gray-300">
                      {Object.entries(countryData.name.nativeName)[0][1].common}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex space-x-2">
                <p className="text-md font-medium  dark:text-gray-100">
                  Population:
                </p>
                <p className=" dark:text-gray-300">{countryData?.population}</p>
              </div>

              <div className="flex space-x-2">
                <p className="text-md font-medium  dark:text-gray-100">
                  Region:
                </p>
                <p className=" dark:text-gray-300">{countryData?.region}</p>
              </div>

              <div className="flex space-x-2">
                <p className="text-md font-medium  dark:text-gray-100">
                  Subregion:
                </p>
                <p className=" dark:text-gray-300">{countryData?.subregion}</p>
              </div>

              <div className="flex space-x-2">
                <p className="text-md font-medium  dark:text-gray-100">
                  Capital:
                </p>
                <p className=" dark:text-gray-300">{countryData?.capital}</p>
              </div>
            </div>
            {/* Second Container */}
            <div className="flex flex-col space-y-2 mb-10">
              <div className="flex space-x-2">
                <p className="text-md font-medium  dark:text-gray-100">
                  Top Level Domain:
                </p>
                <p className=" dark:text-gray-300">
                  {countryData?.altSpellings[0].toLowerCase()}
                </p>
              </div>

              <div className="flex space-x-2">
                <p className="text-md font-medium  dark:text-gray-100">
                  Currencies:
                </p>
                {countryData && (
                  <span className=" dark:text-gray-300">
                    {Object.entries(countryData.currencies)[0][1].name}
                  </span>
                )}
              </div>

              <div className="flex space-x-2">
                <p className="text-md font-medium  dark:text-gray-100">
                  Languages:
                </p>
                {countryData && (
                  <p className=" dark:text-gray-300">
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
            <p className="text-lg font-medium mb-2  dark:text-gray-300">
              Border Countries:
            </p>
            <span className="flex space-x-4  flex-wrap ">
              {countryData?.borders.map((border, index) => {
                return (
                  <div
                    className="bg-white px-8 rounded-md dark:bg-darkblue dark:text-gray-300"
                    key={index}
                  >
                    {border.toLowerCase()}
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
