import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

const DashboardUser = ({ services }) => {
  return (
    <>
      <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-4 mt-5 px-4 lg:px-0">
        {/* content */}
        <div className="md:col-span-9">
          {/* active challenges */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2  gap-4">
            {services?.slice(0, 5)?.map((service, index) => (
              <div
                className={`${
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
                } relative`}
                key={service?._id}
              >
                <Image
                  className="rounded-lg w-full object-cover"
                  src={service?.thumbnail}
                  width={500}
                  height={500}
                  alt={service?.heading}
                />
                {/* overlay */}
                <div className="absolute flex flex-col items-end justify-end top-0 left-0 w-full h-full bg-gradient-to-b from-transparent  to-blue-700/50 border-10 transition-all duration-600 ease-linear rounded-lg"></div>
                <div>
                  <h1 className="absolute z-30 bottom-2 right-2 text-lg font-bold text-white">
                   {service?.heading?.slice(0,15)}...
                  </h1>
                </div>
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
