import React from 'react';

const Category = ({job}) => {
        // console.log(job)
       const {categoryLogo, categoryName, jobsAvailable} = job
        return (
                <div className='bg-indigo-50 p-5 w-64 rounded-lg leading-7'>
                      <img className='mb-4 bg-indigo-100 rounded-lg p-3' src={categoryLogo} alt="" />  
                      <p className='text-gray-500'>{categoryName}</p>
                      <p className='text-gray-500'>{jobsAvailable}</p>
                </div>
        );
};

export default Category;