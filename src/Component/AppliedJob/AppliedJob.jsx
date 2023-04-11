import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AppliedJob = ({ data }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    site,
    location,
    time,
    salary,
  } = data;
  return (
    <div className="flex w-[60%] justify-between p-7 border-2 items-center">
      <div>
        
          <img src={companyLogo} alt="" />
        
        <div>
        <p className="text-xl font-medium text-gray-700">{jobTitle}</p>
      <p className="text-gray-600">{companyName}</p>
          <div className="flex gap-3 my-3">
            <button className="btn border px-2 rounded border-indigo-700 text-indigo-800">
              {site}
            </button>
            <button className="btn border px-2 rounded border-indigo-700 text-indigo-800">
              {time}
            </button>
          </div>
          <div className="flex gap-20">
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> {location}
            </p>
            <p>
              <FontAwesomeIcon icon={faDollarSign} /> {salary}
            </p>
          </div>
        </div>
      </div>
      <Link to={`/details/${id}`}>
     <button className="btn bg-gradient-to-r from-indigo-400 to-violet-500 px-2 py-2 text-white rounded-md font-medium mt-2">
        View Details
      </button>
     </Link>
    </div>
  );
};

export default AppliedJob;
