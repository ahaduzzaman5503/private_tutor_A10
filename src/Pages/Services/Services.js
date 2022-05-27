import { useEffect, useState } from "react";
import ServiceInfo from "../Services/ServiceInfo";

const Services = ( ) => {
    const [services, setService] = useState([]);

    useEffect( () => {
        fetch('Services.json')
        .then (res => res.json())
        .then(data => setService(data));
         
    },[])

    return (
        
        <div className="container mx-auto py-10" >
           <div className='text-center text-5xl font-bold text-primary py-3'>
               <h1> Private Classes</h1>
           </div>
           
            
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-3 '>
            {
               services.map(service => <ServiceInfo
                key={service._id}
                service={service}
               ></ServiceInfo>)
            }
            </div>
         </div>
       
    );
};

export default Services;