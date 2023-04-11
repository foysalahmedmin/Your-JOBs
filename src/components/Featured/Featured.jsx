import React, { useEffect, useState } from 'react';
import FeaturedItem from '../FeaturedItem/FeaturedItem';

const Featured = () => {
    const [jobsData, setJobsData] = useState([])
    useEffect(() => {
        fetch("./data/job's_data.json")
            .then(res => res.json())
            .then(data => setJobsData(data))
    }, [])
    return (
        <section className='py-16'>
            <div className="container">
                <div className="text-center mb-7">
                    <h2 className='font-bold text-4xl mb-5'>
                        Featured Jobs
                    </h2>
                    <p>
                        Explore thousands of job opportunities with all the information you need. Its your future
                    </p>
                </div>
                <div className='grid md:grid-cols-2 justify-around gap-5'>
                    {
                        jobsData.map((singleData) => <FeaturedItem data={singleData} key={singleData._id} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Featured;