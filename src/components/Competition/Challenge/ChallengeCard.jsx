"use client";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ChallegeDialog from "./ChallengeDialog";
import Image from "next/image";
import { Box } from "@mui/material";

const ChallengeCard = ({ challenge }) => {
  return (
    <div
      className="bg-black w-full rounded-3xl  flex flex-col-reverse 
    lg:flex-row-reverse items-center justify-evenly gap-2 p-3"
    >
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col rounded-lg transform MuiDialog-paperScrollPaper transition-transform cursor-pointer  ">
          <div className="p-3">
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
