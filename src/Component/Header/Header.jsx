import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="md:flex justify-between items-center  my-container">
      <h1 className="text-3xl font-semibold"> <span className="text-indigo-500">Career</span>Build</h1>
      <div className="flex gap-2 md:gap-10 text-gray-500 flex-col md:flex-row">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
        >
          Statistics
        </NavLink>
        <NavLink
          to="/appliedJobs"
          className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
        >
          Applied Jobs
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
        >
          Blog
        </NavLink>
      </div>
      <button className="btn bg-gradient-to-r from-indigo-400 to-violet-500 px-4 py-3 rounded-lg text-white font-medium mt-3">
        Start Applying
      </button>
    </nav>
  );
};

export default Header;
