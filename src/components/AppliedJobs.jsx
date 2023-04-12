import React, { useEffect, useState } from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link, useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const { cartArray } = useLoaderData();
  console.log(cartArray);
  
  // add state to store the filter value
  const [filter, setFilter] = useState("");

  // filter the job list based on the filter value
  const filteredJobs = filter
    ? cartArray.filter((cart) => cart.remote_or_onsite === filter)
    : cartArray;

  return (
    <div>
      <h2 className="text-center text-2xl font-extrabold -mt-12 font-mono">
        Applied Jobs
      </h2>

      <div className="mt-32">
        <div className="flex gap-8 justify-evenly mb-6">
          <button
            className={`btn-feature ${
              filter === "Remote" ? "bg-purple-400" : "bg-purple-200"
            }`}
            onClick={() => setFilter("Remote")}
          >
            Remote Jobs
          </button>
          <button
            className={`btn-feature ${
              filter === "Onsite" ? "bg-purple-400" : "bg-purple-200"
            }`}
            onClick={() => setFilter("Onsite")}
          >
            On-site Jobs
          </button>
        </div>
        {filteredJobs.map((cart, index) => (
          <div key={index}>
            <div className="flex justify-between items-center px-8 border gap-6 py-16 mx-auto sm:max-w-xl  lg:max-w-screen-md md:px-24 lg:px-4 lg:py-4 mt-4">
              <div className="flex gap-6">
                <div className="bg-gray-200 w-48 h-52 inline-flex justify-center items-center mr-3">
                  <img className="m-4 p-4" src={cart.company_logo} alt="" />
                </div>
                <div className="mt-8">
                  <h1 className="text-lg font-semibold font-mono">
                    {cart.job_title}
                  </h1>
                  <p className="font-mono text-sm mb-3">
                    {cart.company_name}
                  </p>
                  <div className="flex gap-3 mb-6">
                    <button className="btn-feature">
                      {cart.remote_or_onsite}
                    </button>
                    <button className="btn-feature">
                      {cart.fulltime_or_parttime}
                    </button>
                  </div>
                  <div className="flex gap-7 mb-6 text-base">
                    <div className="inline-flex items-center">
                      <MapPinIcon className="h-5 w-6 " />
                      <p>{cart.location}</p>
                    </div>
                    <div className="inline-flex items-center">
                      <CurrencyDollarIcon className="h-5 w-5 " />
                      <p>{cart.salary}</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link to={`../job/${cart.id}`}>
                <button className="btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
