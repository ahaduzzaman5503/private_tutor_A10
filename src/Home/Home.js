import React from 'react';
import Benner from './Benner';
import ExtraSection from '../Home/ExtraSection';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Benner></Benner>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;