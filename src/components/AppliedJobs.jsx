import React, { useEffect } from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
    const {cartArray, products} = useLoaderData()
    console.log(products);

  return (
    <div>
      <h2 className="text-center text-2xl font-extrabold -mt-12 font-mono">
        Applied Jobs
      </h2>
      <p>{products.length}</p>

        <div>
          <div className="flex justify-between items-center px-8 border gap-6 py-16 mx-auto sm:max-w-xl  lg:max-w-screen-md md:px-24 lg:px-4 lg:py-4 mt-36">
            <div className="flex gap-6">
              <div className="bg-gray-200 w-48 h-52 inline-flex justify-center items-center mr-3">
                <img className="m-4 p-4" src={products.company_logo} alt="" />
              </div>
              <div className="mt-8">
                <h1 className="text-lg font-semibold font-mono">
                  {products.job_title}
                </h1>
                <p className="font-mono text-sm mb-3">
                  {products.company_name}
                </p>
                <div className="flex gap-3 mb-6">
                  <button className="btn-feature">
                    {products.remote_or_onsite}
                  </button>
                  <button className="btn-feature">
                    {products.fulltime_or_parttime}
                  </button>
                </div>
                <div className="flex gap-7 mb-6 text-base">
                  <div className="inline-flex items-center">
                    <MapPinIcon className="h-5 w-6 " />
                    <p>{products.location}</p>
                  </div>
                  <div className="inline-flex items-center">
                    <CurrencyDollarIcon className="h-5 w-5 " />
                    <p>{products.salary}</p>
                  </div>
                </div>
              </div>
            </div>
          <button className="btn-primary">View Details</button>
          </div>
        </div>
 
    </div>
  );
};

export default AppliedJobs;
