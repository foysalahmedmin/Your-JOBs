import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <>
            <Banner />
            <Category />
            <Featured />
        </>
    );
};

export default Home;