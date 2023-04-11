import React from 'react';

const FeaturedItem = ({data}) => {
    const {_id, picture, job_title, company, job_duration, work_position, address, min_salary, max_salary} = data
    console.log(data)
    return (
        <div className='p-10 border shadow rounded-md border-purple-50'>
            <div className= 'max-w-xs mb-8 bg overflow-hidden'>
                <img className='h-14' src={picture} alt="" />
            </div>
            <div>
                <h3>{job_title}</h3>
                <h3>{company}</h3>
                <div className='flex gap-5'>
                    <p className='outline'>{work_position}</p>
                    <p className='outline'>{job_duration}</p>
                </div>
                <div>
                    <p>{address}</p>
                    <p>Salary: {min_salary}K - {max_salary}K</p>
                </div>
            </div>
            <button className='btn-primary'>View Details</button>
        </div>
    );
};

export default FeaturedItem;