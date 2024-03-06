"use client";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import axios from "axios";
import PrivateRoute from "../Private/PrivateRoute";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import SegmentIcon from "@mui/icons-material/Segment";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
const Trainers2 = ({ allTrainers }) => {
  const { data: session } = useSession();

  const router = useRouter();

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    if (!session) {
      signIn();
    }
    if (session && session.user && session.user.email) {
      axios
        .get(
          `https://fit-track-server.vercel.app/api/v1/singleuser?email=${session.user.email}`
        )
        .then((res) => {
          setUserData(res.data);
        });
    } else {
      router.push("/");
    }
  }, [router, session]);
  const userId = userData._id;

  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const handleConnect = () => {
    toast.success("Request sent!");
    console.log("clicked");
  };

  const toggleModal = (trainerId) => {
    setSelectedTrainer(trainerId);
    document.body.classList.toggle("open-modal");
  };

  const handleShareReq = (temail) => {
    const userDetails = {
      targetId: userId,
      userEmail: session.user.email,
      userName: userData.username,
      userImage: session.user.image,
      requestStatus: "pending",
      seenStatus: false,
    };

    axios
      .post(
        "https://fit-track-server.vercel.app/api/v1/postdatainuserfriendlist",
        {
          temail,
          userDetails,
        }
      )
      .then((res) => {
        if (res.data === "Request Sent") {
          toast.success("Request sent!");
          router.push("https://fit-track-server.vercel.app/trainers");
        }
      })
      .catch((error) => {
        if (error.response.data === "User already in friend list") {
          toast("Request was sent!", {
            style: {
              backgroundColor: "#378ae5",
              color: "white",
            },
          });
        }
      });
  };

  return (
    <PrivateRoute>
      <div>
        <div className="bg-black h-16"></div>
        <div className="max-w-7xl mx-auto ">
          <h1 className="text-3xl md:text-4xl font-bold mt-10 text-center">
            Get your<span className="text-[#378ae5]"> Trainers Here</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-3 py-12">
            {allTrainers.map((train) => (
              <div className="shadow-2xl mt-16" key={train._id}>
                <div className="rounded  shadow-lg bg-white mb-16">
                  <div className="relative flex">
                    <div className="ml-4 mt-4 ">
                      <button onClick={handleConnect} className="text-2xl">
                        <GroupAddIcon />
                      </button>
                    </div>
                    <div className="h-16 w-full flex justify-center items-center">
                      <Image
                        width={130}
                        height={130}
                        className="rounded-full w-28 h-28 object-cover absolute -top-16  flex justify-center items-center"
                        src={train.profile_image}
                        alt="trainer image"
                      />
                    </div>
                    <div>
                      <div>
                        <button
                          className="text-end mr-4 mt-4 "
                          onClick={() => toggleModal(train._id)}
                        >
                          <SegmentIcon />
                        </button>

                        <div
                          className="modal-container"
                          onClick={toggleModal}
                        ></div>

                        {selectedTrainer && (
                          <div className="modal-window">
                            <h2>Email</h2>
                            <p>
                              {
                                allTrainers.find(
                                  (trainer) => trainer._id === selectedTrainer
                                )?.email
                              }
                            </p>
                            <h2>Bio</h2>
                            <p>
                              {
                                allTrainers.find(
                                  (trainer) => trainer._id === selectedTrainer
                                )?.bio
                              }
                            </p>
                            <div className="flex items-center buttons mt-5">
                              <button
                                className="flex-1 "
                                onClick={() => {
                                  handleShareReq(
                                    allTrainers.find(
                                      (trainer) =>
                                        trainer._id === selectedTrainer
                                    )?.email
                                  );
                                }}
                              >
                                Send hire request...
                              </button>
                              <Link className="flex-1 " href="/videoCall">
                                <button>Video Call</button>
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className=" flex justify-center items-center gap-2 font-bold text-xl my-2">
                      {train?.name}

                      {train.status === "active" ? (
                        <svg
                          className="w-6 h-6 text-green-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="8" fill="currentColor" />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6 text-green-500 opacity-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="8" fill="currentColor" />
                        </svg>
                      )}
                    </div>
                    <div className="text-center uppercase font-medium mb-5">
                      {train?.specialization?.slice(0, 20)}
                    </div>
                    <p>{train?.bio?.slice(0, 120)}...</p>
                  </div>

                  <div className="flex justify-center p-3 items-center gap-3 text-white bg-[#04315b]">
                    <Facebook></Facebook>
                    <Twitter></Twitter>
                    <Instagram></Instagram>
                    <YouTube></YouTube>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Toaster />
    </PrivateRoute>
  );
};

export default Trainers2;
