import React, { useEffect, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import AppliedItem from '../AppliedItem/AppliedItem';
import { getAppliedJobs } from '../../utilities/localStorageManage';

const Applied = () => {
    const [allData, setAllData] = useState([])
    const [appliedData, setAppliedData] = useState([])
    // const [showAppliedData, setShowAppliedData] = useState(appliedData)
    useEffect(()=>{
        fetch("/data/job's_data.json")
        .then(res => res.json())
        .then(data => setAllData(data))
    }, [])
    useEffect(()=> {
        const dbData = getAppliedJobs()
        const findAppliedData = [];
        for(let id in dbData){
            if(allData[0]){
                const existData = allData.find(singleData => singleData._id == id);
                findAppliedData.push(existData);
            }
        }
        setAppliedData(findAppliedData);
    },[allData])
    return (
        <section>
            <div className="container h-96 flex justify-center items-center bg-purple-50 py-16">
                <h1 className='font-bold text-4xl'>Job Details</h1>
            </div>
            <div className='container py-16'>
                <div className='text-right mb-5'>
                    <button className='flex items-center gap-2 font-semibold text-gray-700 text-xl ml-auto bg-purple-100 rounded-md py-3 p-5'>
                        <span>Filter By</span> <span><HiChevronDown /></span>
                    </button>
                </div>
                <div>
                    
                    {
                        appliedData.map(singleData => <AppliedItem data = {singleData} key={singleData._id} /> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Applied;