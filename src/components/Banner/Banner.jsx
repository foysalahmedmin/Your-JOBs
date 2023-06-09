import React from 'react';
import Lottie from 'lottie-react'
import animation from '../../assets/interview.json'

const Banner = () => {
    return (
        <section className='banner-sections py-16 bg-purple-50'>
            <div className="container md:flex flex-row-reverse justify-between items-center">
                <div>
                    <div>
                        <Lottie animationData={animation} loop={true}></Lottie>
                    </div>
                </div>
                <div className='md:max-w-[50%] text-center md:text-left xl:max-w-lg'>
                    <h1 className='md:text-7xl text-5xl font-bold mb-6'>
                        One Step Closer To Your <br /> <span className='text-animation'>Dream Job</span>
                    </h1>
                    <p className='mb-6'>
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <button className='btn-primary'>Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default Banner;