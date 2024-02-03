import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import { getSingleService } from "@/utils/getSingleService";

const ServiceDetailPage = async({params}) => {
 
    const service = await getSingleService(params?.serviceId)
    
    return(
        <>
            <ServiceDetails service={service}/>
        </>
    )}
export default ServiceDetailPage;