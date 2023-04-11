import React from 'react';
import { HiOutlineCurrencyDollar, HiOutlineLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const AppliedItem = ({ data }) => {
    const { _id, picture, job_title, company, job_duration, work_position, address, min_salary, max_salary } = data
    return (
        <div className='p-10 border shadow rounded-md border-purple-50 md:flex items-center gap-8 mb-5'>
            <div className='md:w-[400px] flex items-center justify-center rounded-md mx-auto md:mx-0 mb-8 text-center'>
                <img className='h-14 mx-auto md:mx-0' src={picture} alt="" />
            </div>
            <div>
                <div className='text-center md:text-start'>
                    <h3 className='text-2xl text-gray-800 font-bold mb-2'>{job_title}</h3>
                    <h3 className='text-xl text-gray-500 font-bold mb-3'>{company}</h3>
                </div>
                <div className='flex gap-4 mb-3 justify-center md:justify-start text-center md:text-left'>
                    <p className='outline'>{work_position}</p>
                    <p className='outline'>{job_duration}</p>
                </div>
                <div className='md:flex gap-4 mb-4 font-semibold text-gray-500 text-center mx-auto md:text-left'>
                    <p className='flex items-center justify-center gap-2'><HiOutlineLocationMarker /><span>{address}</span></p>
                    <p className='flex items-center justify-center gap-2'><HiOutlineCurrencyDollar /> <span>Salary:  {min_salary}K - {max_salary}K</span></p>
                </div>
            </div>
            <div className='ml-auto text-center'><Link to={`/jobDetails/${_id}`}><button className='btn-primary ml-auto'>View Details</button></Link></div>
        </div>
    );
};

export default AppliedItem;