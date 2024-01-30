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
import { color } from "@mui/system";
const BlogCard = ({ challenge }) => {

    //states
    const [likeBtn, setLikeBtn] = useState(false)
    const [DislikeBtn, setDisLikeBtn] = useState(false)
    //states



    // console.log(likeBtn)
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
                            <IconButton onClick={() => setLikeBtn(!likeBtn)} aria-label="add to favorites">
                                <ThumbUpIcon sx={{ mr: "10px", color: likeBtn ? "blue" : "" }} />
                                <Typography>233</Typography>
                            </IconButton>

                        </div>
                        <div className="border h-8 border-black"></div>
                        <div className="space-y-1">
                            <IconButton onClick={() => setDisLikeBtn(!DislikeBtn)} aria-label="add to favorites">
                                <ThumbDownAltIcon sx={{ mr: "10px", color: DislikeBtn ? "red" : "" }} />
                                <Typography>112</Typography>
                            </IconButton>

                        </div>
                    </div>

                </div>

            </Card>
        </div>
    );
};

export default BlogCard;