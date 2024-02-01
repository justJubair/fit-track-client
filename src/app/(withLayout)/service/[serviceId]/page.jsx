import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";

const ServiceDetailPage = ({params}) => {
    
    return(
        <>
            <ServiceDetails id={params?.serviceId}/>
        </>
    )}
export default ServiceDetailPage;