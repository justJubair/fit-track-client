import Module from "@/components/Module/Module";
import { getAllServices } from "@/utils/getAllServices";


const Modules = async () => {


    const allServices = await getAllServices();

    return (
        <div>
            <div className="bg-black h-16"></div>
            <div className="max-w-6xl mx-auto mt-20 mb-40">
                <h1 className="text-4xl text-center uppercase">Welcome back. Ready for your todays workout?</h1>
                     {
                        allServices.slice(0,1).map((module)=> <Module module={module} key={module._id}></Module>)
                     }           
                </div>
        </div>
    );
};

export default Modules;