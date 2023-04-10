import React from 'react';

const Details = ({filterData}) => {
       const {jobTitle} = filterData
        
        return (
                <div>
                     <p>{jobTitle}</p>
                </div>
        );
};

export default Details;