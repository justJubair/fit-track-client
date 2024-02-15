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
import { Box } from "@mui/material";

const ChallengeCard = ({ challenge }) => {
  return (
  
    <div
      className="  bg-black w-full rounded-3xl  flex flex-col-reverse 
    lg:flex-row-reverse items-center justify-evenly gap-2 p-3"
    >
      <div className="w-full h-full">
        
        <div className="MuiDialog-paperScrollPaper w-full h-full  flex  flex-col   rounded-lg transform hover:scale-110 transition-transform cursor-pointer  ">
          <div className="p-2">
            <Typography
              variant="body2"
              sx={{ color: "white", minHeight: "100px" }}
            >
              {challenge.description}
            </Typography>
          </div>

          <div className="px-2 flex justify-end">
          <ChallegeDialog challenge={challenge}></ChallegeDialog>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="  h-full ">
        <Image
          component="img"
          height={500}
      width={500}
          src={challenge.imageLink}
          alt={challenge.challengeName}
          className="rounded-xl "
        />
          <div className="flex items-center gap-2 pt-2">
            <Avatar sx={{ backgroundColor: "white" }} aria-label="recipe">
              <Image
                width={500}
                height={500}
                src={challenge.postedBy.image}
                alt={challenge.postedBy.name}
              />
            </Avatar>
            <Box variant="h6" sx={{ color: "white", fontSize: ".9rem" }}>
              <Typography
                variant="h6"
                sx={{ letterSpacing: "2px", fontSize: ".7rem" }}
              >
            {challenge.postedBy.name.toUpperCase()}
              </Typography>
              <Typography sx={{ color: "white", fontSize: ".7rem" }}>
                {new Date(challenge.postedOn).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Typography>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
