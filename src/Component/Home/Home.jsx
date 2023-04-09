import React from "react";
import JobCategory from "../JobCategory/JobCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    
      <div className="my-container">
        <div className="flex items-center gap-15 ">
          <div>
            <h1 className="text-6xl leading-[75px] font-semibold">
              One Step <br /> Closer To Your <br />{" "}
              <span className="text-indigo-500">Dream Job</span>
            </h1>
            <p className="mt-3 text-gray-500">
              Explore thousands of job opportunities with all the <br />{" "}
              information you need. Its your future. Come find it. Manage all
              your job application from start to finish.
            </p>
            <button className="btn bg-gradient-to-r from-indigo-400 to-violet-500 px-4 py-3 mt-4 font-medium rounded-lg text-white">
        Get Started
      </button>
          </div>
          <div>
            <img src="../../All Images/P3OLGJ1 copy 1.png" alt="" />
          </div>
        </div>
        {/* job category */}
        <JobCategory></JobCategory>
        <FeaturedJobs></FeaturedJobs>
      </div>
    
  );
};

export default Home;
