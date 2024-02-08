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
    <div style={{ margin: "0.5rem 1rem" }}>
      <Box
        className="glow-effect transform transition-transform ease-in-out duration-200 hover:scale-105 shadow-black"
        sx={{ backgroundColor: "gray", minHeight: "500px", minWidth: "320px" }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor: "black" }} aria-label="recipe">
              <Image
                width={500}
                height={500}
                src={challenge.postedBy.image}
                alt={challenge.postedBy.name}
              />
            </Avatar>
          }
          title={
            <Typography variant="h6" sx={{ color: "black", fontSize: "1rem" }}>
              Challenge Posted by {challenge.postedBy.name.toUpperCase()}
            </Typography>
          }
          subheader={new Date(challenge.postedOn).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          sx={{ title: { color: "black" }, minHeight: "130px" }}
        />

        <Box sx={{ minHeight: "200px" }}>
          <Image
            component="img"
            height={100}
            width={300}
            src={challenge.imageLink}
            alt={challenge.challengeName}
          />
        </Box>
        <CardContent sx={{ height: "100%" }}>
          <Typography variant="h6" sx={{ color: "black" }}>
            {challenge.challengeName}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "black", minHeight: "100px" }}
          >
            {challenge.description.slice(0, 200)}...
          </Typography>
        </CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0.5rem 1rem",
          }}
        >
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          {/* this is modal for challenge details info */}
          <ChallegeDialog challenge={challenge}></ChallegeDialog>
        </div>
        <svg className="glow-container">
          <rect
            pathLength="100"
            strokeLinecap="round"
            className="glow-blur"
          ></rect>
          <rect
            pathLength="100"
            strokeLinecap="round"
            className="glow-line"
          ></rect>
        </svg>
      </Box>
    </div>
  );
};

export default ChallengeCard;
