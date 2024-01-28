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
const BlogCard = ({ challenge }) => {
    // console.log(challenge)
    return (
        <div style={{ margin: '0.5rem 1rem' }}>
            <Card sx={{ backgroundColor: 'white' }}>
                <CardMedia
                    component="img"
                    height="200px"
                    image={challenge?.image}
                    alt="Paella dish"
                    // sx={{height:"200px"}}
                />
                <CardHeader
                    avatar={
                        <Avatar sx={{ backgroundColor: 'black' }} aria-label="recipe">
                            <Image width={500} height={500} src={challenge?.userImageURL} alt="" />
                        </Avatar>
                    }
                    title={<Typography variant="h6" sx={{ color: 'black', fontSize: '1rem' }}>
                        {challenge?.userName}
                    </Typography>}
                    subheader="September 14, 2016"
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
                            <ThumbUpIcon />
                            <Typography>233</Typography>
                        </div>
                        <div className="border h-8 border-black"></div>
                        <div className="space-y-1">
                            <ThumbDownAltIcon />
                            <Typography>112</Typography>
                        </div>
                    </div>

                </div>

            </Card>
        </div>
    );
};

export default BlogCard;