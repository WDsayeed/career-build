import React, { useEffect, useState } from "react";
import Category from "../Category/Category";


const JobCategory = () => {
        const [jobs, setJobs] = useState([])

        useEffect( ()=>{
                fetch('jobCategory.json')
                .then(res=> res.json())
                .then(data=> setJobs(data))
        },[])
  return (
    <div className="mt-20">
      <h1 className="text-5xl font-semibold text-center mb-3">Job Category List</h1>
      <p className="text-center text-slate-500">Explore thousands of job opportunities with all the information you need. Its your future</p>

      <div className="flex justify-between mt-10">
        {
                jobs.map((job, idx)=> <Category
                key={idx}
                job={job}
                ></Category>)
        }
      </div>
    </div>
  );
};

export default JobCategory;
