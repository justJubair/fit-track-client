import Module from "@/components/Module/Module";
import { getAllServices } from "@/api/getAllServices";


const Modules = async({params}) => {
     
    const id = params.moduleid;

    const allServices = await getAllServices();
    // console.log(allServices)

    const userModules = allServices.filter((serv) => serv.serviceId === id)
    // console.log(userModules)

    return (
        <div>
            <div className="bg-black h-16"></div>
            <div className="max-w-7xl mx-auto mt-20 mb-40">
                <h1 className="text-4xl text-center uppercase my-12">Welcome back. Ready for your todays workout?</h1>
                     {
                        userModules.map((module)=> <Module module={module} key={module._id}></Module>)
                     }           
                </div>
        </div>
    );
};

export default Modules;