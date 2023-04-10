import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import person from "../assets/person.png";
import Categories from "./Categories";
import JobFeatured from "./JobFeatured";

const Home = () => {
  const jobFeatures = useLoaderData();
  console.log(jobFeatures);

  return (
    <div>
      <div className="bg-gray-100">
        <div className="my-container flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
            <h1 className="text-7xl font-sans font-semibold mb-6">One Step</h1>
            <h1 className="text-7xl font-sans font-semibold mb-6">
              Closer to Your
            </h1>
            <h1 className="text-7xl font-sans font-semibold mb-6 text-blue-500 animate-pulse bg-gradient-to-r bg-clip-text text-transparent from-purple-500 to-blue-800">
              Dream Job
            </h1>
            <p>
              <small>
                Explore thousands of job opportunities with all the <br />{" "}
                information you need. Its your future. Come find it. Manage all{" "}
                <br /> your job application from start to finish.
              </small>
            </p>
            <div className="flex flex-col items-center md:flex-row mt-8">
              <Link to="/" className="btn-primary md:w-auto md:mr-4">
                <div className="inline-flex items-center justify-center w-full h-full">
                  <p className="mr-3">Get Started</p>
                </div>
              </Link>
            </div>
          </div>
          {/* Image section */}
          <div className="relative lg:w-1/2 ">
            <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
              <img src={person} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Job Category section */}
      <div className="grid sm:grid-cols-1 xs:grid-cols-1 px-24">
        <div className="text-center mt-20">
          <h1 className="text-5xl font-extrabold font-mono mb-3">
            Job Category List
          </h1>
          <p>
            <small>
              Explore thousands of job opportunities with all the information
              you need. Its your future.
            </small>
          </p>
        </div>
        <Categories />
        {/* <div className="grid lg:grid-cols-4 sm:grid-cols-2">
          {jobsCategories.map((jobCategory) => (
            <Categories key={jobCategory.id} jobCategory={jobCategory} />
          ))}
        </div> */}
      </div>

      {/* Featured Section */}
      <div>
        <div className="text-center mt-20 mb-8">
          <h1 className="text-5xl font-extrabold font-mono mb-3">
            Featured Jobs
          </h1>
          <p>
            <small>
              Explore thousands of job opportunities with all the information
              you need. Its your future.
            </small>
          </p>
        </div>
        <div className="grid lg:grid-cols-2 px-24 md:max-w-full md:max-h-full">
          {
            jobFeatures.map(jobFeature => <JobFeatured
              key={jobFeature.id}
              jobFeature={jobFeature}
            />)
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
