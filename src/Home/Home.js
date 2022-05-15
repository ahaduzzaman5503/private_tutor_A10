import React from 'react';
import Benner from './Benner';
import ExtraSection from './ExtraSection';
import ServiceSec from './ServiceSec';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Benner></Benner>
            <ServiceSec></ServiceSec>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;