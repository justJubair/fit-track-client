"use client";
import React, { useState, useEffect } from "react";
import VideoFileIcon from "@mui/icons-material/VideoFile";

const SubmitForm = () => {
  const [file, setFile] = useState(null);
  const [key, setKey] = useState(0);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setKey((prevKey) => prevKey + 1);
  };
  console.log(file);

  useEffect(() => {
    return () => setKey(0);
  }, []);

  return (
    <div className="  px-2">
      <div className="">
        <div className="md:flex">
          <div className="w-full p-3">
            <div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="title"
                >
                  TASK TITLE
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-md"
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter the title"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  DESCRIPTION
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  id="description"
                  name="description"
                  placeholder="Enter the description"
                  rows="4"
                />
              </div>
            </div>

            <div className="relative">
              {file && (
                <div className="mt-4">
                  <video
                    key={key} // Add key attribute
                    width="100%"
                    height="100%"
                    controls
                    className="rounded-md"
                  >
                    <source src={URL.createObjectURL(file)} type={file.type} />
                    Your browser does not support the video tag.
                  </video>

                  <p className="text-gray-600 mt-2">File Type: {file.type}</p>
                  <p className="text-gray-600 mt-2">File Name: {file.name}</p>
                </div>
              )}
              <div className="rounded-lg  border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                <div className="absolute">
                  <div className="flex  items-center">
                    <VideoFileIcon className="fa fa-folder-open fa-4x text-blue-700" />
                    <span className="block text-black uppercase font-bold ">
                      {file
                        ? "Click to select diffrent file"
                        : "Attach your files here"}
                    </span>
                  </div>
                </div>

                <input
                  type="file"
                  accept="video/*"
                  className="h-full w-full opacity-0"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;
