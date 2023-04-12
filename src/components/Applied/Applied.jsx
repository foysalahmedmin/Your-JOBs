import React, { useEffect, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import AppliedItem from '../AppliedItem/AppliedItem';
import { getAppliedJobs } from '../../utilities/localStorageManage';
import { useNavigation } from 'react-router-dom';
import LoadSpinner from '../LoadSpinner/LoadSpinner';

const Applied = () => {
    const [allData, setAllData] = useState([])
    const [appliedData, setAppliedData] = useState([])
    const [showAppliedData, setShowAppliedData] = useState([])
    const [dropdown, setDropdown] = useState(false)

    useEffect(()=>{
        fetch("/data/job's_data.json")
        .then(res => res.json())
        .then(data => setAllData(data))
    }, [])

    const setData = () => {
        const dbData = getAppliedJobs()
        const findAppliedData = [];
        for(let id in dbData){
            if(allData[0]){
                const existData = allData.find(singleData => singleData._id == id);
                findAppliedData.push(existData);
            }
        }
        setAppliedData(findAppliedData);
        setShowAppliedData(findAppliedData)
    }

    useEffect(()=> {
        setData()
    },[allData])

    const filterAppliedData = (type) =>{
        if(type == "All"){
            setShowAppliedData(appliedData)
        }else if(type == "Remote"){
            const remoteData = appliedData.filter(singleData => singleData.work_position == type);
            setShowAppliedData(remoteData);
        }else if(type == "Onsite"){
            const onsiteData = appliedData.filter(singleData => singleData.work_position == type);
            setShowAppliedData(onsiteData);
        }
    }

    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <LoadSpinner />
    }

    return (
        <section>
            <div className="container h-96 flex justify-center items-center bg-purple-50 py-16">
                <h1 className='font-bold text-4xl'>Job Details</h1>
            </div>
            <div className='container py-16'>
                <div className='text-right mb-5 relative'>
                    <button onClick={()=>setDropdown(!dropdown)} className='flex items-center gap-2 font-semibold text-gray-700 text-xl ml-auto bg-purple-100 rounded-md py-3 p-5'>
                        <span>Filter By</span> <span><HiChevronDown /></span>
                    </button>
                    <ul className= {`mt-3 border border-primary absolute py-3 p-5 right-0 bg-white z-10 w-[8.7rem] rounded-md transition origin-top ${dropdown? 'scale-y-100' : 'scale-y-0' }`}>
                        <li onClick={()=> filterAppliedData('All')} className='outline cursor-pointer mb-3'>All</li>
                        <li onClick={()=> filterAppliedData('Remote')} className='outline cursor-pointer mb-3'>Remote</li>
                        <li onClick={()=> filterAppliedData('Onsite')} className='outline cursor-pointer'>Onsite</li>
                    </ul>
                </div>
                <div>
                    
                    {
                        showAppliedData.map(singleData => <AppliedItem data = {singleData} key={singleData._id} /> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Applied;