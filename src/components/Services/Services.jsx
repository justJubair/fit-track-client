import { getAllServices } from "@/api/getAllServices";
import Service from "./Service";
import { useEffect, useState } from "react";



const Services = () => {
    const [services, setServices] = useState([])

    //get fetched services data from getAllServices.jsx
  
    useEffect(()=>{
        const getServices = async()=>{
            const res = await getAllServices();
            setServices(res)
          
        }
        getServices()
    },[])

   
    return (
        <div className="max-w-[1336px] mx-auto my-24 px-4">
            <h1 className="text-3xl my-4 font-semibold text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* mapping all services one by one */}
              
                    {
                        services.map((serv) => <Service serv={serv} key={serv._id}></Service>)
                    }
            </div>
            
            
        </div>
    );
};

export default Services;
