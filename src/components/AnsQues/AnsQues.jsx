import React, { useState } from 'react';

const AnsQues = (props) => {
    const {question, ans} = props.data
    const [show, setShow] = useState([false]);
    return (
        <div>
            <div className="mb-5 transition-all">
                <div onClick={()=>setShow(!show)} className=" bg-primary px-12 py-6 border-sky-950">
                    <h3 className="text-white text-xl font-semibold">
                        {question}
                    </h3>
                </div>
                <div className= {show == true? "h-auto overflow-hidden transition-[height]" : "h-0 overflow-hidden transition-[height]"}>
                    <p className='px-12 py-6 bg-sky-100'>
                        {ans}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AnsQues;