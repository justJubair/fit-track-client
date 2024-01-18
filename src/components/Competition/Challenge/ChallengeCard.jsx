"use client";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChallegeDialog from "./ChallengeDialog";

const ChallengeCard = () => {
  return (
    <div className="m-2 lg:m-4">
      <Card sx={{ backgroundColor: "grey" }} className="text-white">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Challenge Created by DEMO NAME"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://imgs.search.brave.com/mykjG_xDQN1lYDIZCJUep2aivbXSThakozzCB-htdm0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/eW1fNTM4NzYtMjEz/ODkuanBnP3NpemU9/NjI2JmV4dD1qcGc"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h6">Chellenge DEMO NAME</Typography>
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
          <ChallegeDialog></ChallegeDialog>
        </div>
      </Card>
    </div>
  );
};

export default ChallengeCard;
