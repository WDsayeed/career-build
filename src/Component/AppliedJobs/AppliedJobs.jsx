import React from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const datas = useLoaderData()
  return (
    <div className="">
      {datas.map((data) => (
        <AppliedJob key={data.id} data={data}></AppliedJob>
      ))}
    </div>
  );
};

export default AppliedJobs;
