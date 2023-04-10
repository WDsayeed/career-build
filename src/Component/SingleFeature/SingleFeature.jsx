import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'

const SingleFeature = ({feature}) => {
        const {id, companyLogo, jobTitle, companyName, site, location, time, salary, jobDescription, jobResponsibility, educationalRequirements, experiences} = feature
        return (
                <div className='border-2 border-gray-100 p-5'>
                      <img className='w-32 h-10 mb-3' src={companyLogo} alt="" /> 
                      <p className='text-xl font-medium text-gray-700'>{jobTitle}</p> 
                      <p className='text-gray-600'>{companyName}</p>
                      <div className='flex gap-3 my-2'>
                        <button className='btn border px-2 rounded border-indigo-700 text-indigo-800'>{site}</button>
                        <button className='btn border px-2 rounded border-indigo-700 text-indigo-800'>{time}</button>
                      </div>
                      <div className="flex gap-20">
                        <p> <FontAwesomeIcon icon={faLocation} /> {location}</p>
                        <p>{salary}</p>
                      </div>
                      <button>View Details</button>
                </div>
        );
};

export default SingleFeature;