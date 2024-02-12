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
      {/* main container */}
      <div className="flex flex-col max-w-screen-md mx-auto md:flex-row mt-10 ">
        <div className="container ml-10">
          <h1 className="ml-10 font-bold text-xl">Your Accepted challenge</h1>
          <div className="flex justify-start flex-wrap mb-6">
            <div className="w-36 border-2 bg-purple-500 p-3 mt-8 rounded-2xl">
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
            <div className="w-36 border-2 bg-purple-500 p-3 mt-8 rounded-2xl">
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
            <div className="w-36 border-2 bg-purple-500 p-3 mt-8 rounded-2xl">
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
            {/* <div className="card2">
              <div className="checkmark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                  <path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                </svg>
              </div>
              <h1>TASKS</h1>
              <p>
                For today's <br /> lesson.
              </p>
            </div>
            <div className="card3">
              <div className="checkmark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                  <path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                </svg>
              </div>
              <h1>Running</h1>
              <p>
                250 steps per <br /> week.
              </p>
            </div> */}
          </div>
          <div className="">
            <div class="w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
              <div class="bg-gray-200 text-gray-700 text-lg px-6 py-4">
                <div class="ml-4">
                  <p class="font-bold">Tony Nguyen</p>
                  <p class="text-sm text-gray-700 mt-1">Instructor</p>
                </div>
              </div>

              <div class="flex justify-between items-center px-6 py-4">
                <div class="bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">
                  Under Review
                </div>
                <div class="text-sm">May 14, 1988</div>
              </div>

              <div class="px-6 py-4 border-t border-gray-200">
                <div class="border rounded-lg p-4 bg-orange-300">
                  Here is a short comment about this employee.
                </div>
              </div>

              <div class="bg-gray-200 px-6 py-4">
                <div class="flex items-center pt-3">
                  <div class="ml-4">
                    <p class="font-bold">Tony Nguyen</p>
                    <p class="text-sm text-gray-700 mt-1">Instructor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-96 mt-6">
            <SubmitForm></SubmitForm>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ManageChallenge;
