import React, { useEffect, useState } from "react";
import {
  CalendarDaysIcon,
  ChatBubbleBottomCenterTextIcon,
  CurrencyDollarIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../utils/fakeDB";

const JobDetails = () => {
  const { Id } = useParams();
  const [data, setData] = useState({});
  // const [apply, setApply] = useState([])
  const jobDetails = useLoaderData();

  const handleApply= (data) =>{
    console.log(data)
    addToDb(data.id)
  }


  useEffect(() => {
    if (jobDetails) {
      let find = jobDetails.find((jobDetail) => jobDetail.id === Id);
      setData(find);
    }
  }, []);


  return (
    <div>
      <h1 className="text-center text-2xl font-extrabold -mt-12 font-mono">
        Job Details
      </h1>
      <div className="px-4 grid lg:grid-cols-2 gap-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-10 lg:py-8 mt-36">
        <div>
          <p className="mb-4">
            <span className="details-title">Job Description : </span>
            {data.job_description}
          </p>
          <p className="mb-4">
            <span className="details-title">Job Responsibility :</span>{" "}
            {data.job_responsibility}
          </p>
          <p className="mb-4">
            <span className="details-title line-clamp-3">
              Educational Requirements :{" "}
            </span>
            {data.educational_requirements}
          </p>
          <p>
            <span className="details-title line-clamp-2">Experience :</span>
            {data.experiences}
          </p>
        </div>
        <div>
          <div className=" w-5/6 h-96 bg-gray-100 px-8 py-8 rounded-lg">
            <h1 className="text-lg font-mono font-extrabold">Details</h1>
            <div className="mb-5">
              <p>
                <span className="inline-flex items-center gap-1 mt-4">
                  <CurrencyDollarIcon className="h-5 w-5 text-blue-300" />
                  <span className="font-semibold">Salary :</span>
                  {data.salary}
                </span>
              </p>
              <p>
                <span className="inline-flex items-center gap-1 mt-2">
                  <CalendarDaysIcon className="h-5 w-5 text-blue-300" />
                  <span className="font-semibold">Job Title :</span>
                  {data.job_title}
                </span>
              </p>
            </div>
            <h1 className="text-lg font-mono font-extrabold">
              Contact Information
            </h1>
            <div className="mb-5">
              {data.contact_information && (
                <p>
                  <span className="inline-flex items-center gap-1 mt-4">
                    <PhoneIcon className="h-5 w-5 text-blue-300" />
                    <span className="font-semibold">Phone :</span>
                    {data.contact_information.phone}
                  </span>
                </p>
              )}
              {data.contact_information && (
                <p>
                  <span className="inline-flex items-center gap-1 mt-4">
                    <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-blue-300" />
                    <span className="font-semibold">Email :</span>
                    {data.contact_information.email}
                  </span>
                </p>
              )}
              <p>
                <span className="inline-flex items-center gap-1 mt-2">
                  <CalendarDaysIcon className="h-5 w-5 text-blue-300" />
                  <span className="font-semibold">Address :</span>
                  {data.location}
                </span>
              </p>
            </div>
          </div>
            <button onClick={() => handleApply(data)} className="w-5/6 h-12 text-white bg-purple-500 hover:bg-purple-600 transition duration-300 rounded-lg mt-3">Apply Now </button>
        </div> 
      </div>
    </div>
  );
};

export default JobDetails;
