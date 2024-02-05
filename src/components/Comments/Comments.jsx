"use client"
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSession } from "next-auth/react";


const Comments = () => {
    const { data: session } = useSession();
    return (
        <div className="lg:w-1/2 mx-auto my-10">
            <div className=" flex items-center gap-4 ">
                <Avatar alt={session?.user?.name} src={session?.user?.image} sx={{ mb: "20px" }} />

                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        name="title"
                        id="floating_email"
                        className="block py-2.5 text-white px-2 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
            </div>
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
                    <AccordionDetails className="space-y-4">
                        <div className="border p-2 rounded-xl ">
                            <div className="flex  gap-2">
                                <Avatar alt={session?.user?.name} src={session?.user?.image} sx={{ mb: "20px" }} />
                                <Typography sx={{ mt: "8px", fontSize: "15px", fontWeight: "700" }}>
                                    {session?.user?.name}
                                </Typography>
                            </div>
                            <Typography>
                                Lorem ipsum dolor sit amet.
                            </Typography>
                        </div>
                        <div className="border p-2 rounded-xl">
                            <div className="flex  gap-2">
                                <Avatar alt={session?.user?.name} src={session?.user?.image} sx={{ mb: "20px" }} />
                                <Typography sx={{ mt: "8px", fontSize: "15px", fontWeight: "700" }}>
                                    {session?.user?.name}
                                </Typography>
                            </div>
                            <Typography>
                                Lorem ipsum dolor sit amet.
                            </Typography>
                        </div>
                        <div className="border p-2 rounded-xl">
                            <div className="flex  gap-2">
                                <Avatar alt={session?.user?.name} src={session?.user?.image} sx={{ mb: "20px" }} />
                                <Typography sx={{ mt: "8px", fontSize: "15px", fontWeight: "700" }}>
                                    {session?.user?.name}
                                </Typography>
                            </div>
                            <Typography>
                                Lorem ipsum dolor sit amet.
                            </Typography>
                        </div>
                        <div className="border p-2 rounded-xl">
                            <div className="flex  gap-2">
                                <Avatar alt={session?.user?.name} src={session?.user?.image} sx={{ mb: "20px" }} />
                                <Typography sx={{ mt: "8px", fontSize: "15px", fontWeight: "700" }}>
                                    {session?.user?.name}
                                </Typography>
                            </div>
                            <Typography>
                                Lorem ipsum dolor sit amet.
                            </Typography>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default Comments;