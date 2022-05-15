import React from 'react';
import Ahaduzzaman from "../assets/Ahaduzzaman_Ahad.jpg";

const AboutMe = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero min-h-screen bg-base-200 mb-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={Ahaduzzaman} className=" mask mask-decagon max-w-sm rounded-lg shadow-2xl h-80 w-80" alt='Ahaduzzaman' />
                    <div>
                    <h1 className="text-4xl font-bold">About Me</h1>
                    <p className="py-6">I am Ahaduzzaman Ahad. I love my dream. I want to be a Full-Stack web Developer. I am willing to do more than hard work to fulfill my dream. I will be a professonal web developer inshaAllah. I am working hard for that. The rest is reliance on Allah.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;