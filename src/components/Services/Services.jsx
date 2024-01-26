import { getAllServices } from "@/utils/getAllServices";
import Service from "./Service";
import UserInfoDialog from "../CustomizeDiet/FormDialog/UserInfoDialog";


const Services = async () => {
  
    //get fetched services data from getAllServices.jsx
    const services = await getAllServices();
    // console.log(services)

    return (
        <div className="max-w-[1536px] mx-auto my-24">
            <h1 className="text-3xl my-4 font-semibold text-center">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* mapping all services one by one */}
                {
                    services.map((serv) => <Service serv={serv} key={serv.id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
