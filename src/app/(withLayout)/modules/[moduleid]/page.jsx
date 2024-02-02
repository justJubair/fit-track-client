/* eslint-disable react/no-unescaped-entities */
import Module from "@/components/Modules/Module";
import { getServices } from "@/utils/getServices";


const Modules = async ({ params }) => {
    // console.log(params)
    // const module = params.moduleid;
    // console.log(module)

    const allServices = await getServices();
    // console.log(allServices)

    const userModules = allServices.filter((serv) => serv.serviceId === module)
    console.log(userModules)

    return (
        <div>
            <div className="bg-black h-16"></div>
            <div className="max-w-6xl mx-auto my-40">
                <h1 className="text-4xl text-center uppercase">Welcome back. Ready for your today's workout?</h1>
                     {
                        userModules.map((module)=> <Module module={module} key={module._id}></Module>)
                     }           
                </div>
        </div>
    );
};

export default Modules;