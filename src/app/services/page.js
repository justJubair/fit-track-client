import { getAllServices } from "@/utils/getAllServices";
import Service from "@/components/Services/Service";
import Link from "next/link";
import Image from "next/image";

const Services = async () => {

    //get fetched services data from getAllServices.jsx
    const services = await getAllServices();

    return (
        <div>
            <div className="max-w-[1536px] mx-auto my-24">
                <h1 className="text-3xl my-4 font-semibold text-center">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* mapping all services one by one */}
                    {
                        services.map((serv) => (
                            <div className='rounded-md mx-4 lg:mx-0'>
                            <Link href={`/services/${serv.id}`} className='rounded-md'>
                            <Image width={300} height={300} sx={{ height: "auto" }}
                                                src={serv.thumbnail}
                                                alt=""
                                                style={{
                                                    // Make the image expand to cover the video's dimensions
                                                    width: '100%',
                                                    height: 'auto',
                                                    objectFit: 'cover',
                                                    borderRadius: '10px'
                                                }}
                                            />
                            </Link>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;