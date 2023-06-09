import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleFeature = ({ feature }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    site,
    location,
    time,
    salary
    
  } = feature;
  return (
    <div className="border-2 mb-5 border-gray-100 p-8">
      <img className="w-32 h-16 mb-6" src={companyLogo} alt="" />
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
     <Link to={`/details/${id}`}>
     <button className="btn bg-gradient-to-r from-indigo-400 to-violet-500 px-2 py-2 text-white rounded-md font-medium mt-4">
        View Details
      </button>
     </Link>
    </div>
  );
};

export default SingleFeature;
