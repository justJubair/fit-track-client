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

  useEffect(() => {
    return () => setKey(0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      file: file,
    };

  
    // TODO : post video to youtube
    // TODO : post formdata to db
    
    e.target.reset();
    setFile(null);
    setKey(0);
  };

  return (
    <div className="px-2  w-3/4 mx-auto">
      <p className="pl-3 font-bold uppercase text-xl my-4">Submit your task</p>
      <div className="w-full">
        <div className="md:flex ">
          <div className="w-full p-3">
            <form onSubmit={handleSubmit} className="w-full">
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
                    required
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
                    required
                  />
                 
                </div>
              </div>

              <div className="relative">
                {file && (
                  <div className="mt-4">
                    <video
                      key={key}
                      width="100%"
                      height="100%"
                      controls
                      className="rounded-md md:w-9/12 mx-auto"
                    >
                      <source
                        src={URL.createObjectURL(file)}
                        type={file.type}
                      />
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
                          ? "Click to select different file"
                          : "Attach your files here"}
                      </span>
                    </div>
                  </div>

                  <input
                    type="file"
                    accept="video/*"
                    className="h-full w-full opacity-0"
                    onChange={handleFileChange}
                    required
                  />
                </div>
              </div>
              <button
                type="submit" // Change the type to "submit"
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;
