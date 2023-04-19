import React, { useEffect, useState } from 'react';
import AnsQues from '../AnsQues/AnsQues';
import SubBanner from '../SubBanner/SubBanner';

const Blog = () => {
    const [ansQues, setAnsQues] = useState([]);
    useEffect(() => {
        fetch("/data/question_ans.json")
            .then(res => res.json())
            .then(data => setAnsQues(data))
    }, [])
    return (
        <section>
            <SubBanner><h1 className='font-bold text-4xl'>Ans Of Questions</h1></SubBanner>
            <div className="container py-16">
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