import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { HiOutlineCurrencyDollar, HiOutlineFlag, HiOutlineLocationMarker, HiOutlineMailOpen, HiOutlinePhone } from 'react-icons/hi';

const JobDetails = () => {
    const main_data = useLoaderData()
    const { _id, job_title, company, address, min_salary, max_salary, phone, email, description, job_responsibility, Educational_Requirements, Experiences } = main_data;
    const [applied, setApplied] = useState({})
    useEffect(()=>{
        
    },[])
    return (
        <section>
            <div className="container h-96 flex justify-center items-center bg-purple-50 py-16">
                <h1 className='font-bold text-4xl'>Job Details</h1>
            </div>
            <div className="container flex justify-between gap-5 py-16">
                <div>
                    <p className='mb-7 leading-8 text-xl'><strong className='text-gray-600'>Job Description: </strong><span className='text-gray-500'>{description}</span></p>
                    <p className='my-7 leading-8 text-xl'><strong className='text-gray-600'>Job Responsibility: </strong><span className='text-gray-500'>{job_responsibility}</span></p>
                    <p className='my-7 leading-8 text-xl'><strong className='text-gray-600'>Educational Requirements: </strong><span className='text-gray-500'>{Educational_Requirements}</span></p>
                    <p className='my-7 leading-8 text-xl'><strong className='text-gray-600'>Experiences: </strong><span className='text-gray-500'>{Experiences}</span></p>
                </div>
                <div>
                    <div className='w-96'>
                        <div className='bg-purple-100 p-8 mb-8 rounded-md'>
                            <div className='mb-8 '>
                                <h3 className='text-2xl font-bold border-b border-black pb-5 mb-5'>Job Details</h3>
                                <hr />
                                <p className='flex items-center gap-2 text-xl mb-3'><span className='text-primary'><HiOutlineCurrencyDollar /></span> <span><strong className='text-gray-600'>Salary:</strong>  <span className='text-gray-500'>{min_salary}K - {max_salary}K</span></span></p>
                                <p className='flex items-center gap-2 text-xl'><span className='text-primary'><HiOutlineFlag /></span> <span><strong className='text-gray-600'>Job Title:</strong> <span className='text-gray-500'>{job_title}</span></span></p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold border-b border-black pb-5 mb-5'>Contact Information</h3>
                                <p className='flex items-center gap-2 text-xl mb-3'><span className='text-primary'><HiOutlinePhone /></span> <span><strong className='text-gray-600'>Phone:</strong> <span className='text-gray-500'>{phone}</span></span></p>
                                <p className='flex items-center gap-2 text-xl mb-3'><span className='text-primary'><HiOutlineMailOpen /></span> <span><strong className='text-gray-600'>Email:</strong> <span className='text-gray-500'>{email}</span></span></p>
                                <p className='flex items-center gap-2 text-xl'><span className='text-primary'><HiOutlineLocationMarker /></span> <span><strong className='text-gray-600'>Address:</strong> <span className='text-gray-500'>{address}</span></span></p>
                            </div>
                        </div>
                        <button className='btn-primary w-full'>Apply Now</button>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default JobDetails;