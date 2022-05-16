import React from 'react';
import Benner from './Benner';
import ExtraSection from '../Home/ExtraSection';
import HomeService from './HomeService';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Benner></Benner>
            <HomeService></HomeService>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;