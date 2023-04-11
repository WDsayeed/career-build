import React from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const datas = useLoaderData()
  return (
    <div className="flex flex-col  gap-y-7 my-32 items-center">
      {datas.map((data) => (
        <AppliedJob key={data.id} data={data}></AppliedJob>
      ))}
    </div>
  );
};

export default AppliedJobs;
