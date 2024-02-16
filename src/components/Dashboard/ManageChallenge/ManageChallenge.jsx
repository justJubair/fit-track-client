"use client";

import Image from "next/image";
// import css

import "./ManageChallenge.css";
// icons
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import SubmitForm from "@/components/Competition/ChallengeSubmit/SubmitForm";
import FlipCountdown from "@rumess/react-flip-countdown";

const ManageChallenge = () => {
  return (
    <div>
      <div className="flex flex-col container md:mx-20   md:flex-row mt-10 gap-4 ">
        <div className="md:w-1/2 ">
          <h1 className=" font-bold text-3xl uppercase">Your Accepted challenge</h1>
          <div className="flex justify-center flex-wrap mb-6 gap-4">
            <div className="w-36 border-2 bg-purple-500 p-3 md:mt-8 mt-2 rounded-2xl shadow-md shadow-black">
              <div className="deadline">
                <p className="text-center uppercase pb-2 text-white font-bold">
                  Time left
                </p>
                <FlipCountdown
                  hideYear
                  endAt="2024-12-31T23:59:59"
                  size="extra-small"
                  titlePosition="bottom"
                ></FlipCountdown>
              </div>
            </div>
            <div className="w-36 border-2 bg-purple-500 p-3 md:mt-8 mt-2 rounded-2xl shadow-md shadow-black">
              <div className="deadline">
                <p className="text-center uppercase pb-2 text-white font-bold">
                  Time left
                </p>
                <FlipCountdown
                  hideYear
                  endAt="2024-12-31T23:59:59"
                  size="extra-small"
                  titlePosition="bottom"
                ></FlipCountdown>
              </div>
            </div>
            <div className="w-36 border-2 bg-purple-500 p-3 md:mt-8 mt-2 rounded-2xl shadow-md shadow-black">
              <div className="deadline">
                <p className="text-center uppercase pb-2 text-white font-bold">
                  Time left
                </p>
                <FlipCountdown
                  hideYear
                  endAt="2024-12-31T23:59:59"
                  size="extra-small"
                  titlePosition="bottom"
                ></FlipCountdown>
              </div>
            </div>
           
          </div>
          <div className="">
            <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-gray-200 text-gray-700 text-lg px-6 py-4">
                <div className="ml-4">
                  <p className="font-bold">Challenges</p>
                  
                </div>
              </div>

              <div className="flex justify-between items-center px-6 py-4">
                <div className="bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">
                 Challenge Details
                </div>
                <div className="text-sm">May 14, 1988</div>
              </div>

              <div className="px-6 py-4 border-t border-gray-200">
                <div className="border rounded-lg p-4 bg-orange-300">
                 Details
                </div>
              </div>

              <div className="bg-gray-200 px-6 py-4">
                <div className="flex items-center pt-3">
                  <div className="ml-4">
                    <p className="font-bold">Saidul Arefin</p>
                    <p className="text-sm text-gray-700 mt-1">3 Challenge painding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-12 w-full">
        
          <SubmitForm></SubmitForm>
        </div>
      </div>
    </div>
  );
};
export default ManageChallenge;
