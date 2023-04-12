import React, { useEffect } from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { getStoredCart } from "../utils/fakeDB";
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
     
    </div>
  );
};

export default AppliedJobs;
