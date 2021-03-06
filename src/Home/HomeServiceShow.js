import React from 'react';
import { Link } from 'react-router-dom';

const HomeServiceShow = ({homeService, goServicePageHandle}) => {
    const {name, price, short_description, image} = homeService;
    return (
        <div className='container mx-auto'>
            <div className="autohero p-5 bg-violet-50  rounded-lg">
                <div className="  gap-2 drop-shadow-2xl  ">
                    <div className='px-10 '>
                      <img src={image} className="max-w-sm rounded-lg shadow-2xl h-48 w-44 mb-3" alt='img' />
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold">{name}</h1>
                        <p className="py-3">{short_description}</p>
                        <h1 className="text-xl font-bold pb-2 ml-10"> Price: {price} TK</h1>
                        <Link to="services"> <button  className="btn btn-primary ml-10">Admisstion</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeServiceShow;