import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar  py-16 px-4 mx-auto lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Statistics</a>
            </li>
            <li>
              <a>Applied Jobs</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <Link to='/' className="normal-case text-4xl font-extrabold font-mono bg-gradient-to-r bg-clip-text text-transparent to-indigo-800 from-blue-500">jobJourney</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink to='statistics'
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink to='appliedJobs'
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink to='blog'
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn-primary">Start Applying</button>
      </div>
    </div>
  );
};

export default Header;
