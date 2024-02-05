"use client";
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Button, IconButton, Tooltip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { Box, Stack } from '@mui/system';
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const BlogCard = ({ challenge }) => {

    //states
    const { data: session } = useSession();
    const router = useRouter();
    //states
    // console.log(challenge.likes)

    // const isLiked = challenge.likes.filter(item => item.email !== session?.user?.email);
    // const isLiked = challenge.likes.filter(item => item.email !== session?.user?.email).length > 0;
    // const isDisLiked = challenge.disLikes.filter(item => item.email !== session?.user?.email).length > 0;
    // console.log(isLiked)
    const handelLikeBtn = async (_id) => {
        try {
            const like = {
                blogId: _id,
                likerEmail: session?.user?.email
            };
            const res = await axios.patch("https://fit-track-server.vercel.app/api/v1/like", like);
            console.log(res.data)
            window.location.reload()

        } catch (error) {
            console.error("Error liking blog:", error);
        }
    }
    const handelDisLikeBtn = async (_id) => {
        try {
            const DisLikes = {
                blogId: _id,
                DislikerEmail: session?.user?.email
            }
            const res = await axios.patch("https://fit-track-server.vercel.app/api/v1/Dislike", DisLikes);
            window.location.reload()
        }
        catch (error) {
            console.error("Error", error)
        }
    }
    return (
        <div className="lg:w-4/5 mx-auto">

            <Card sx={{ backgroundColor: 'white' }}>
                <Image width={500} height={500} src={challenge?.image} alt="Card Image" className="w-full h-96 object-cover" />

                <div className='flex justify-between mt-2 items-center '>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ backgroundColor: 'black' }} aria-label="recipe">
                                <Image width={500} height={500} src={challenge?.userImageURL} alt="" />
                            </Avatar>
                        }
                        title={<Typography variant="h6" sx={{ color: 'black', fontSize: '1rem' }}>
                            {challenge?.userName}
                        </Typography>}
                        subheader={challenge?.time}
                        sx={{ title: { color: 'black' } }}
                    />
                    <Link href={`blog/${challenge?._id}`}>
                        <Button size='small' color='inherit' variant="outlined" sx={{ mr: '10px' }}>Details</Button>
                    </Link>
                </div>
                <CardContent>
                    <Typography variant="h6" sx={{ color: 'black' }}>
                        {
                            challenge?.title?.length > 40 ?
                                challenge?.title.slice(0, 40) + "..."
                                :
                                challenge?.title
                        }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'black' }}>
                        {challenge.description.length > 250
                            ? challenge.description.slice(0, 250).concat("...")
                            : challenge.description
                        }
                    </Typography>
                </CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem' }}>
                    <Tooltip title="Save" arrow>
                        <IconButton aria-label="add to favorites">
                            <BookmarksIcon />
                        </IconButton>
                    </Tooltip>
                    <div className="space-x-4 flex items-center">
                        <div className="space-y-1">
                            <Tooltip title="Like" arrow >
                                <IconButton onClick={() => handelLikeBtn(challenge?._id)} aria-label="add to favorites">
                                    <FitnessCenterIcon sx={{ mr: "10px" }} />
                                    <Typography>{challenge?.likes.length}</Typography>
                                </IconButton>
                            </Tooltip>
                        </div>
                        <div className="border h-8 border-black"></div>
                        <div className="space-y-1">
                            <Tooltip title="Dislike" arrow >
                                <IconButton onClick={() => handelDisLikeBtn(challenge?._id)} aria-label="add to favorites">
                                    <FastfoodIcon sx={{ mr: "10px" }} />
                                    <Typography>{challenge?.disLikes.length}</Typography>
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>

                </div>

            </Card>

        </div>
    );
};

export default BlogCard;