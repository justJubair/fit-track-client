"use client"
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    IconButton,
    Tooltip,
    Typography
} from "@mui/material";
import { Box } from '@mui/system';
import axios from "axios";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from 'react-toastify';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const Comments = ({ id, comments, incrementCount }) => {
    const { data: session } = useSession();
   

    const handelComment = async (e) => {
        e.preventDefault()
        const form = e.target
        const blogComment = form.comment.value

        const comment = {
            comment: blogComment,
            userImage: session?.user?.image,
            userName: session?.user?.name
        }
        const blogId = id
        const finalComment = {
            blogId,
            comment
        }
        // console.log(blogId)
        try {
            const res = await axios.patch("http://localhost:5000/api/v1/comment", finalComment);
            // console.log(res.data)

            if (res.data.modifiedCount) {
                toast.success('Comment Uploaded!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                form.reset()
                incrementCount()
            };
        } catch (error) {
            console.error("Error occurred while making the request:", error);
        }
    }
    const deleteComment = async (comment) => {
        const D_Comment = {
            blogId: id,
            comment
        }
     
        try {
            const res = await axios.patch("https://fit-track-server.vercel.app/api/v1/comment-delete", D_Comment);
           

            if (res.data.modifiedCount) {
                toast.success('Deleted!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                incrementCount()
            };
        } catch (error) {
            console.error("Error occurred while making the request:", error);
        }
    }
    return (
        <div className="lg:w-1/2 mx-auto my-10">
            <form
                onSubmit={handelComment}
                className=" flex items-center gap-4 ">
                <Avatar alt={session?.user?.name} src={session?.user?.image} sx={{ mb: "20px" }} />

                <div className="relative z-0 w-full mb-6 group ">
                    <input
                        type="text"
                        name="comment"
                        id="floating_email"
                        className="block py-2.5  px-2 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Comment
                    </label>

                </div>
                <Tooltip title="Post" arrow>
                    <button>
                        <ArrowCircleRightOutlinedIcon sx={{ fontSize: "35px", color: "Highlight" }} />
                    </button>
                </Tooltip>
            </form>
            <div className="space-y-3 ">
                <Accordion
                    className="border"
                    sx={{}}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className="text-[14px] font-semibold"
                    >
                        Comments
                    </AccordionSummary>
                    <AccordionDetails className="space-y-4 overflow-y-scroll h-[500px]">
                        {
                            comments?.map((comment, i) => (
                                <div key={i} className="border p-2 rounded-xl ">
                                    <div className="flex justify-between  gap-2">
                                        <Box sx={{ display: "flex", gap: "10px" }}>
                                            <Avatar alt={comment?.userName} src={comment?.userImage} sx={{ mb: "20px" }} />
                                            <Typography sx={{ mt: "8px", fontSize: "15px", fontWeight: "700" }}>
                                                {comment?.userName}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: `${session?.user.name !== comment?.userName ? "none" : ""}` }}>
                                            <Tooltip
                                                onClick={() => deleteComment(comment?.comment)}
                                                title="Delete" arrow>
                                                <IconButton aria-label="add to favorites">
                                                    <DeleteForeverIcon sx={{ color: "red" }} />
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                    </div>
                                    <Typography>
                                        {comment?.comment}
                                    </Typography>
                                </div>
                            ))
                        }
                    </AccordionDetails>
                </Accordion>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Comments;