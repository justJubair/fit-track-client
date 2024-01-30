import React from 'react';
import axios from 'axios';
const ServiceDetails = ({params}) => {
    //  console.log(params)


    return (
        <div className='max-w-6xl mx-auto my-40'>
            <h1>This is service details page {params.serviceId}</h1>
        </div>
    );
};

export default ServiceDetails;