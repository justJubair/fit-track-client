"use client";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChallegeDialog from "./ChallengeDialog";
import Image from "next/image";

const ChallengeCard = ({challenge}) => {
  return (
    <div className="m-2 lg:m-4">
      <Card sx={{ backgroundColor: "grey" }} className="text-white">
        <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor: "black" }} aria-label="recipe">
             <Image width={500} height={500} src="https://imgs.search.brave.com/srvbJUX3E27xiBy5dZpnZTvW5yjuZhn50u4FeP1V43Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSpNNmRmZmZo/dVgySFVCSXpSV3Zm/ZWdBLmpwZWc" alt="" />
            </Avatar>
          }
          title={`Challenge Created by ${challenge.createdBy.toUpperCase()}`}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={challenge.imageURL}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h6">{challenge.name}</Typography>
          <Typography variant="body2">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <div className="flex justify-between items-center px-4 pb-4">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          {/* this is modal for  challenge details info */}
          <ChallegeDialog challenge={challenge}></ChallegeDialog>
        </div>
      </Card>
    </div>
  );
};

export default ChallengeCard;
