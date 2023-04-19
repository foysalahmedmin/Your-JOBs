import React, { useEffect, useState, PureComponent } from 'react';
import { useNavigation } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import SubBanner from '../SubBanner/SubBanner';



const Statistics = () => {
    const [marksData, setMarksData] = useState([])

    useEffect(() => {
        fetch('/data/assignment_marks.json')
        .then(res => res.json())
        .then(data => setMarksData(data))
    }, [])

    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <LoadSpinner />
    }

    return (
        <section>
            <SubBanner><h1 className='font-bold text-4xl'>Assignment Marks</h1></SubBanner>
            <div className="container py-16">
                <div className='text-center flex items-center justify-center h-full overflow-x-scroll lg:overflow-auto'>
                    <AreaChart
                        width={1000}
                        height={300}
                        data={marksData}
                        margin={{
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="mark" stroke="#9873FF" fill="#7E90FE" />
                    </AreaChart>
                </div>
            </div>
        </section>
    );
};

export default Statistics;