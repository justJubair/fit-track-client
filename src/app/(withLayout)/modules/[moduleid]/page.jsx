/* eslint-disable react/no-unescaped-entities */
import Module from "@/components/Modules/Module";
import { getAllServices } from "@/utils/getAllServices";


const Modules = async ({ params }) => {
    // console.log(params)
    // const module = params.moduleid;
    // console.log(module)

    const allServices = await getAllServices();
  
   

    // const userModules = allServices.filter((serv) => serv.serviceId === params?.moduleid)
    // console.log(userModules)

    return (
        <div>
            <div className="bg-black h-16"></div>
            <div className="max-w-6xl mx-auto mt-20 mb-40">
                <h1 className="text-4xl text-center uppercase">Welcome back. Ready for your today's workout?</h1>
                     {
                        allServices.slice(0,1).map((module)=> <Module module={module} key={module._id}></Module>)
                     }           
                </div>
        </div>
    );
};

export default Modules;