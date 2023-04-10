import React from 'react';

const CategoryItem = ({data}) => {
    const {picture, category, sits} = data;
    return (
        <div className='p-10 w-full sm:w-80 bg-purple-50 rounded-md'>
            <div className='p-4 text-center w-16 h-16 mb-7 bg-purple-100 rounded-md'>
                <img className='' src={picture} alt="" />
            </div>
            <div>
                <h3 className='text-gray-800 text-2xl font-semibold'>
                    {category}
                </h3>
                <p className='text-gray-500'>
                    {sits} Jobs Available
                </p>
            </div>
        </div>
    );
};

export default CategoryItem;