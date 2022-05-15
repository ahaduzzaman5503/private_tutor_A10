import React from 'react';
import Benner1  from "../assets/Benner1.png";
import Benner2  from "../assets/Benner2.png";
import Benner3  from "../assets/Benner3.png";
import Benner4  from "../assets/Benner4.png";

const Benner = () => {
    return (
        <div className='container mx-auto pb-5'>
             <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={Benner1} className="w-full" alt='carouselImg' /> / 
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={Benner2} className="w-full" alt='carouselImg' /> / 
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={Benner3} className="w-full" alt='carouselImg' /> / 
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={Benner4} className="w-full" alt='carouselImg' /> / 
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Benner;