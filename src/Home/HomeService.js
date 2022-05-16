import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import HomeServiceShow from './HomeServiceShow';

const HomeService = () => {
    const [homeServices, setHomeService] = useState([]);
    // const navigate = useNavigate();

    useEffect( () => {
        fetch('HomeServiceThree.json')
        .then (res => res.json())
        .then(data => setHomeService(data));
         
    },[])

    // const goServicePageHandle = () => {
    //     // navigate('/services');
    //     navigate('/nonono')
    // }

    return (
        <div className="container mx-auto py-10" >
           <div className='text-center text-5xl font-bold text-primary py-3'>
               <h1> Private Classes</h1>
           </div>
           
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-3 '>
            {
               homeServices.map(homeService => <HomeServiceShow
                key={homeService._id}
                homeService={homeService}
                // goServicePageHandle={goServicePageHandle()}
               ></HomeServiceShow>)
            }
            </div>
        </div>
    );
};

export default HomeService;