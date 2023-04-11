import React, { useEffect, useState } from 'react';
import FeaturedItem from '../FeaturedItem/FeaturedItem';

const Featured = () => {
    const [jobsData, setJobsData] = useState([])
    const [showFeatures, setShowFeatures] = useState(4)
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
                        jobsData.slice(0, showFeatures).map((singleData) => <FeaturedItem data={singleData} key={singleData._id} />)
                    }
                </div>
            </div>
            <div className='text-center mt-5'>
                {
                    showFeatures == jobsData.length? <button onClick={()=> setShowFeatures(4)} className='outline py-3 px-5'>Show Less</button> : <button onClick={()=> setShowFeatures(jobsData.length)} className='btn-primary'>Show All</button>
                }
            </div>
        </section>
    );
};

export default Featured;