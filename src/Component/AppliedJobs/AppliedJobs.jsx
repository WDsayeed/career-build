import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";
import Filrer from "../Filter/Filrer";

const AppliedJobs = () => {
  const allData = useLoaderData();
  const [data, setData] = useState(allData);

  const [filterData, setFilterData] = useState(allData);
  const handleFilter = (e) => {
    const target = e.target.value;
    const filterData = data.filter((dt) =>  dt.site === target);
    setFilterData(filterData)
    
  };
  console.log(filterData)
  return (
    <div className="my-20">
      <h1 className="text-center text-4xl font-semibold">Applied Jobs</h1>
      <div className="flex gap-6 my-container mb-20 justify-end">
        <select onChange={() => handleFilter(event)}>
          <option value="">Filter by</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
        </select>
      </div>
      <div className="flex flex-col  gap-y-7  items-center">
        {filterData.map((data) => (
          <AppliedJob key={data.id} data={data}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
