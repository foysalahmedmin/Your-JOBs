import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData()
    return (
        <>
            <Banner />
            <Category data = {data} />
        </>
    );
};

export default Home;