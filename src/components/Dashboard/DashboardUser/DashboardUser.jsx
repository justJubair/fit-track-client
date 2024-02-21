import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

const DashboardUser = ({ services, challenges }) => {
  return (
    <>
      <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-4 mt-5 px-4 lg:px-0">
        {/* content */}
        <div className="md:col-span-9">
          {/* title */}
          <h1 className="text-xl md:text-2xl font-bold mb-4">
            Populer Activites
          </h1>

          {/* populer activies */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2  gap-4">
            {services?.slice(0, 5)?.map((service, index) => (
              <Link href={`/service/${service._id}`}  key={service?._id}  className={`${
                index === 0
                  ? ""
                  : index === 1
                  ? "md:col-span-2 md:row-span-2"
                  : index === 2
                  ? ""
                  : index === 3
                  ? "class4"
                  : index === 4
                  ? ""
                  : ""
              } relative hover:cursor-pointer`}>
              <div
               
               
              >
                <Image
                  className="rounded-lg w-full object-cover"
                  src={service?.thumbnail}
                  width={500}
                  height={500}
                  alt={service?.heading}
                />
                {/* overlay */}
                <div className="absolute flex flex-col items-end justify-end top-0 left-0 w-full h-full bg-gradient-to-b from-transparent  to-blue-700/50 border-10 transition-all duration-600 ease-linear rounded-lg hover:bg-blue-700/60"></div>
                <div>
                  <h1 className="absolute bottom-2 right-2 lg:right-2 md:left-1 text-lg md:text-sm lg:text-lg font-bold text-white">
                    {service?.heading?.slice(0, 15)}...
                  </h1>
                </div>
              </div>
              </Link>
              
            ))}
          </div>

          {/* title */}
          <h2 className="text-lg md:text-xl font-bold mb-4 mt-8">
            Weekly Challenges
          </h2>

          {/* weekly Challenges */}
          <div className="space-y-4">
            {challenges?.slice(0, 4)?.map((challenge, index) => (
             
              <div
                key={challenge?._id}
                className={`flex items-center w-full justify-between p-3 rounded-xl ${ index === 0
                    ? "bg-gradient-to-l from-indigo-500  to-blue-200 bg-opacity-50"
                    : index === 1
                    ? "bg-gradient-to-l from-yellow-200  to-green-300 bg-opacity-75"
                    : index === 2
                    ? "bg-gradient-to-l from-teal-300 to-teal-100 bg-opacity-70"
                    : index === 3
                    ? "bg-gradient-to-l from-pink-300 to-yellow-200 bg-opacity-80"
                    : ""}`}
              >
                {/* date and meeting info*/}
                <div className="flex items-center gap-4">
                  <div className="text-center border-r-4 border-gray-700 pr-4">
                    <p className="font-bold text-2xl text-gray-700 ">
                      {index + 2}
                    </p>
                    <p className="font-semibold text-gray-700">
                      {index === 0
                        ? "MON"
                        : index === 1
                        ? "WED"
                        : index === 2
                        ? "FRI"
                        : index === 3
                        ? "SAT"
                        : ""}
                    </p>
                  </div>

                  {/* meeting info */}
                  <div>
                    <p className="text-xl font-bold text-gray-700">
                      {challenge?.challengeName}
                    </p>
                    {/* client images */}
                    <div className="flex items-center -space-x-3">
                      <Image
                        width={100}
                        height={100}
                        className="rounded-full w-9 h-9"
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c61daa1c-5881-43f8-a50f-62be3d235daf"
                        alt="user01"
                      />
                      <Image
                        width={100}
                        height={100}
                        className="rounded-full w-9 h-9"
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/90affa88-8da0-40c8-abe7-f77ea355a9de"
                        alt="user02"
                      />
                      <Image
                        width={100}
                        height={100}
                        className="rounded-full w-9 h-9"
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/07d4fa6f-6559-4874-b912-3968fdfe4e5e"
                        alt="user03"
                      />
                      <Image
                        width={100}
                        height={100}
                        className="rounded-full w-9 h-9"
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e082b965-bb88-4192-bce6-0eb8b0bf8e68"
                        alt="user04"
                      />
                    </div>
                  </div>
                </div>

                <Link href="challenges" className="border-2 border-gray-500 bg-white px-4 py-2 rounded-2xl font-bold shadow-xl duration-200 hover:scale-105">
                  Join
                </Link>
              </div>
            ))}
           
          </div>
        </div>

        {/* sidebar */}
        <div className="md:col-span-3">
          <h1>sidebar</h1>
        </div>
      </div>
    </>
  );
};
export default DashboardUser;
