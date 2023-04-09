import React, { useEffect, useState } from "react";

const JobCategory = () => {
        const [jobs, setJobs] = useState([])

        useEffect( ()=>{
                fetch('jobCategory.json')
                .then(res=> res.json())
                .then(data=> setJobs(data))
        },[])
  return (
    <div className="mt-20">
      <h1 className="text-4xl font-semibold text-center mb-3">Job Category List</h1>
      <p className="text-center text-slate-500">Explore thousands of job opportunities with all the information you need. Its your future</p>

      <div>
        {
                jobs.map(job=> <p>{job.categoryName}</p>)
        }
      </div>
    </div>
  );
};

export default JobCategory;
