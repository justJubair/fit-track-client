"use client";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
// import { color } from "@mui/system";
const BlogCard = ({ challenge }) => {

    //states
    // const [likeBtn, setLikeBtn] = useState(false)
    const [DislikeBtn, setDisLikeBtn] = useState(false)
    const { data: session } = useSession();
    //states

    const handelLikeBtn = async (_id) => {
        try {
            const like = {
                blogId: _id,
                likerEmail: session?.user?.email
            };
            const res = await axios.patch("http://localhost:5000/api/v1/like", like);
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
            const res = await axios.patch("http://localhost:5000/api/v1/Dislike", DisLikes);
            console.log(res.data)
        }
        catch (error) {
            console.error("Error", error)
        }
    }

    // console.log(challenge)
    return (
        <div className="lg:w-4/5 mx-auto">
            <Card sx={{ backgroundColor: 'white' }}>
                <Image width={500} height={500} src={challenge?.image} alt="Card Image" className="w-full h-96 object-cover" />
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
                <CardContent>
                    <Typography variant="h6" sx={{ color: 'black' }}>{challenge?.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'black' }}>
                        {
                            challenge?.description
                        }
                    </Typography>
                </CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem' }}>
                    <IconButton aria-label="add to favorites">
                        <BookmarksIcon />
                    </IconButton>
                    <div className="space-x-4 flex items-center">
                        <div className="space-y-1">
                            <IconButton onClick={() => handelLikeBtn(challenge?._id)} aria-label="add to favorites">
                                <ThumbUpIcon sx={{ mr: "10px" }} />
                                <Typography>{challenge?.likes.length}</Typography>
                            </IconButton>
                        </div>
                        <div className="border h-8 border-black"></div>
                        <div className="space-y-1">
                            <IconButton onClick={() => handelDisLikeBtn(challenge?._id)} aria-label="add to favorites">
                                <ThumbDownAltIcon sx={{ mr: "10px", color: DislikeBtn ? "red" : "" }} />
                                <Typography>{challenge?.disLikes.length}</Typography>
                            </IconButton>
                        </div>
                    </div>

                </div>

            </Card>
        </div>
    );
};

export default BlogCard;