import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Featured from '../Featured/Featured';
import LoadSpinner from '../LoadSpinner/LoadSpinner';

const Home = () => {
    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <LoadSpinner />
    }
    return (
        <>
            <Banner />
            <Category />
            <Featured />
        </>
    );
};

export default Home;