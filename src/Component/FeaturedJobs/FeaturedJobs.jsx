import React, { useEffect, useState } from "react";
import SingleFeature from "../SingleFeature/SingleFeature";

const FeaturedJobs = ({jobFeatures}) => {
  // const [jobFeatures, setJobFeatures] = useState([])
  // useEffect( ()=>{
  //   fetch('Featured.json')
  //   .then(res=> res.json())
  //   .then(data=> setJobFeatures(data))
  // },[])
  return (
    <div>
      <h1 className='text-5xl font-semibold text-center mt-24'>
        Featured Jobs
      </h1>
      <p className="text-center text-slate-500 mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>

      <div className="grid grid-cols-2 gap-8 ">
        {
          jobFeatures.slice(0,4).map(feature=> <SingleFeature
          key={feature.id}
          feature={feature}
          ></SingleFeature>)
        }
      </div>
    </div>
  );
};

export default FeaturedJobs;
