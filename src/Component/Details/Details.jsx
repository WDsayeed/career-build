import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign, faPhone,
faEnvelope , faBriefcase} from "@fortawesome/free-solid-svg-icons";
import { addToDb } from "../../utils/fakeDb";

const Details = ({ findData }) => {
  const {
    id,
    jobTitle,
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    salary,
    phone,
    email,
    address
  } = findData;

  const handleApplyBtn = id =>{
    addToDb(id)
  }

  return (
    <>
    <div className="flex gap-5 my-container">
      <div className="w-3/4">
        <p> <span className="font-bold">Job Description: </span> {jobDescription}</p>
        <p className=" my-6"> <span className="font-bold">Job Responsibility</span> {jobResponsibility}</p>
        <p className="font-bold">Educational Requirements:</p>
        <p className="mb-5">{educationalRequirements}</p>
        <p className="font-bold">Experiences:</p>
        <p>{experiences}</p>
      </div>
     <div>
     <div className="border-2 w-full p-8  bg-indigo-100">
        <p className="font-semibold text-xl mb-4">Job Details</p>
        <div className="border-b-2 border-indigo-200"></div>
        <p className="my-2"><FontAwesomeIcon className="text-indigo-500" icon={faDollarSign} /><span className="font-semibold text-lg"> Salary: </span>{salary}</p>
        <p className="mb-5"><FontAwesomeIcon className="text-indigo-500" icon={faBriefcase} /><span className="font-semibold text-lg"> Job Title:  </span>{jobTitle}</p>

        <p className="font-semibold text-xl mb-4">Contact Information</p>
        <div className="border-b-2 border-indigo-200"></div>
        <p><FontAwesomeIcon className="text-indigo-500"  icon={faPhone} /><span className="font-semibold text-lg"> Phone: </span> {phone}</p>
        <p className="my-2"><FontAwesomeIcon className="text-indigo-500"  icon={faEnvelope} /><span className="font-semibold text-lg"> Email: </span>{email}</p>
        <p><FontAwesomeIcon className="text-indigo-500"  icon={faLocationDot} /><span className="font-semibold text-lg"> Address: </span>{address}</p>
       
      </div>
      <button onClick={()=> handleApplyBtn(id)} className="btn w-full bg-gradient-to-r from-indigo-400 to-violet-500 mt-6 py-4 text-white text-lg rounded-lg font-medium">Apply Now</button>
     </div>
     
    </div>
    
    </>
  );
};

export default Details;
