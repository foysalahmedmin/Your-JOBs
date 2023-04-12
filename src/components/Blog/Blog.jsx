import React, { useEffect, useState } from 'react';
import AnsQues from '../AnsQues/AnsQues';

const Blog = () => {
    const [ansQues, setAnsQues] = useState([]);
    useEffect(() => {
        fetch("/data/question_ans.json")
            .then(res => res.json())
            .then(data => setAnsQues(data))
    }, [])
    return (
        <section className='py-16'>
            <div className="container mx-auto px-[2.5%]">
                <div className="text-center mb-7">
                    <h2 className='font-bold text-4xl'>
                        Ans Of Questions
                    </h2>
                </div>
                <div>
                    {
                        ansQues.map(singleQuestion => <AnsQues data={singleQuestion} key={singleQuestion.id}></AnsQues>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;