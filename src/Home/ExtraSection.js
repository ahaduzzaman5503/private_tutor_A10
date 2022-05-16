import React from 'react';
import ex1 from "../assets/ex1.jpg";
import ex2 from "../assets/ex2.jpg";
import ex3 from "../assets/ex3.jpg";
import ex4 from "../assets/ex4.webp";
import ex5 from "../assets/ex5.jpg";
import ex6 from "../assets/ex6.jpg";
import Understand from "../assets/Understand.png";
import HomeWork from "../assets/Daily Home Work.png";
import weaklyExam from "../assets/Every weak.png";


const ExtraSection = () => {
    return (
        <div>
            <div className="text-center text-4xl font-bold text-primary py-5">
                Our Galarry
            </div>
            <div className='grid gap-5 my-10 justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-2'>
                <img src={ex1} className="max-w-sm rounded-lg shadow-2xl h-48 w-64 mb-3" alt='img' />
                <img src={ex2} className="max-w-sm rounded-lg shadow-2xl h-48 w-64 mb-3" alt='img' />
                <img src={ex3} className="max-w-sm rounded-lg shadow-2xl h-48 w-64 mb-3" alt='img' />
                <img src={ex4} className="max-w-sm rounded-lg shadow-2xl h-48 w-64 mb-3" alt='img' />
                <img src={ex5} className="max-w-sm rounded-lg shadow-2xl h-48 w-64 mb-3" alt='img' />
                <img src={ex6} className="max-w-sm rounded-lg shadow-2xl h-48 w-64 mb-3" alt='img' />
            </div>
            <div>
                <h1 className="text-center text-4xl font-bold text-primary py-2" >Learn Procces</h1>
            <div className=' text-center text-3xl font-bold text-blue-500 py-3 grid gap-5 my-10 justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-3'>
                <div>
                <h1 className='mb-5 text-left'>Easily Understand</h1>
                <img src={Understand} className="max-w-sm rounded-lg shadow-2xl h-48 w-64 mb-3" alt='img' />
                </div>
                <div>
                <h1 className='mb-5 text-left'>Daily Home Work</h1>
                <img src={HomeWork} className="max-w-sm rounded-lg shadow-2xl h-48 w-64 mb-3" alt='img' />
                </div>

                <div>
                <h1 className='mb-5 text-left'>Weekly Exam</h1>
                <img src={weaklyExam} className="max-w-sm rounded-lg shadow-2xl h-48 w-64 mb-3" alt='img' />
                
                </div>
                
            </div>
         </div>
        </div>
    );
};

export default ExtraSection;