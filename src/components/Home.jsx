import React from "react";
import { Link } from "react-router-dom";
import person from "../assets/person.png";

const Home = () => {
  return (
    <div>
      <div className="my-container flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <h1 className="text-7xl font-sans font-semibold mb-6">One Step</h1>
          <h1 className="text-7xl font-sans font-semibold mb-6">
            Closer to Your
          </h1>
          <h1 className="text-7xl font-sans font-semibold mb-6 text-blue-500">
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
            <Link to="/books" className="btn-primary md:w-auto md:mr-4">
              <div className="inline-flex items-center justify-center w-full h-full">
                <p className="mr-3">Visit Store</p>
              </div>
            </Link>
          </div>
        </div>
        {/* Lottie Animation */}
        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
            <img src={person} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
