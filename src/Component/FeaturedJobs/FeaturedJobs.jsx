import React, { useEffect, useState } from "react";
import SingleFeature from "../SingleFeature/SingleFeature";

const FeaturedJobs = ({ jobFeatures }) => {
  const [seeMore, setSeeMore] = useState(false)
  const handleSeeMore = () =>{
    setSeeMore(true)
  }
  return (
    <div className="mt-36 relative">
      <h1 className="text-5xl font-semibold text-center mt-24">
        Featured Jobs
      </h1>
      <p className="text-center text-slate-500 mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="md:grid grid-cols-2 gap-8 mt-20">
        {jobFeatures.length && jobFeatures.slice(0, seeMore? 6: 4).map((feature) => (
          <SingleFeature key={feature.id} feature={feature}></SingleFeature>
        ))}
      </div>
      {
        !seeMore && <button onClick={handleSeeMore} className="btn bg-gradient-to-r from-indigo-400 to-violet-500 px-2 py-2 text-white rounded-md font-medium mt-10   absolute -bottom-16 left-[46%]">
        See All Jobs
      </button>
      }
    </div>
  );
};

export default FeaturedJobs;
