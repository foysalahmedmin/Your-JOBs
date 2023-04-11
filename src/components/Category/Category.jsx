import React, { useEffect, useState } from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';

const Category = () => {
    const [data, setData ] = useState([])
    useEffect(()=>{
        fetch('./data/category.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return (
        <section className='py-16'>
            <div className="container">
                <div className="text-center mb-7">
                    <h2 className='font-bold text-4xl mb-5'>
                        Job Category List
                    </h2>
                    <p>
                        Explore thousands of job opportunities with all the information you need. Its your future
                    </p>
                </div>
                <div className='flex justify-around items-center flex-wrap gap-5'>
                    {
                        data.map((singleData) => <CategoryItem data={singleData} key={singleData._id} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Category;