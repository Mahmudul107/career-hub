import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const JobFeatured = ({ jobFeature }) => {
  const {
    company_logo,
    fulltime_or_parttime,
    location,
    salary,
    job_title,
    company_name,
    remote_or_onsite,
  } = jobFeature;
  return (
    <div className="my-container w-5/6 h-96 mb-6 border">
      <img className="mb-8" src={company_logo} alt="" />
      <h1 className="mb-1 text-2xl font-semibold font-mono">{job_title}</h1>
      <p className="mb-3 text-sm font-sm font-mono">{company_name}</p>
      <div className="flex gap-4 mb-4">
        <button className="btn-feature">{fulltime_or_parttime}</button>
        <button className="btn-feature">{remote_or_onsite}</button>
      </div>
      <div className="flex gap-7 mb-6 text-base">
        <div className="inline-flex items-center">
          <MapPinIcon className="h-5 w-6 " />
          <p>{location}</p>
        </div>
        <div className="inline-flex items-center">
          <CurrencyDollarIcon className="h-5 w-5 " />
          <p>{salary}</p>
        </div>
      </div>
        <Link to="/" className="inline-flex items-center h-10 px-3 font-medium text-white transition duration-300 rounded shadow-md  md:mb-0 bg-purple-400 hover:bg-purple-600">
          <div className="inline-flex items-center justify-center w-full h-full">
            <p className="mr-3">View Details</p>
          </div>
        </Link>
    </div>
  );
};

export default JobFeatured;
