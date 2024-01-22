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
    <div style={{ margin: '0.5rem 1rem' }}>
    <Card sx={{ backgroundColor: 'white' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: 'black' }} aria-label="recipe">
            <Image width={500} height={500} src="https://imgs.search.brave.com/srvbJUX3E27xiBy5dZpnZTvW5yjuZhn50u4FeP1V43Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSpNNmRmZmZo/dVgySFVCSXpSV3Zm/ZWdBLmpwZWc" alt="" />
          </Avatar>
        }
        title={ <Typography variant="h6" sx={{ color: 'black', fontSize: '1rem' }}>
        Challenge Created by {challenge.createdBy.toUpperCase()}
      </Typography>}
        subheader="September 14, 2016"
        sx={{ title: { color: 'black' } }}
      />
      
      <CardMedia
        component="img"
        height="194"
        image={challenge.imageURL}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" sx={{ color: 'black' }}>{challenge.name}</Typography>
        <Typography variant="body2" sx={{ color: 'black' }}>
          This impressive paella is a perfect party dish and a fun meal to
          cook together with your guests. Add 1 cup of frozen peas along with
          the mussels, if you like.
        </Typography>
      </CardContent>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem' }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {/* this is modal for challenge details info */}
        <ChallegeDialog challenge={challenge}></ChallegeDialog>
      </div>
    </Card>
  </div>
  );
};

export default ChallengeCard;
