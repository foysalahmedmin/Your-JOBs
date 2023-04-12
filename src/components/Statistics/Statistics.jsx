import React, { useEffect, useState, PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const Statistics = () => {
    const [marksData, setMarksData] = useState([])

    useEffect(() => {
        fetch('/data/assignment_marks.json')
        .then(res => res.json())
        .then(data => setMarksData(data))
    }, [])

    return (
        <section className='py-16'>
            <div className="container">
                <div className="text-center mb-7">
                    <h2 className='font-bold text-4xl mb-5'>
                        Assignment Marks
                    </h2>
                    <p>
                        Explore thousands of job opportunities with all the information you need. Its your future
                    </p>
                </div>
                <div className='text-center flex items-center justify-center h-full overflow-x-scroll'>
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