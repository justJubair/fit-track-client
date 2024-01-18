/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CountDown from "./CountDown";
const positions = [
  {
    position: "1st",
    points: 3,
  },
  {
    position: "2nd",
    points: 2,
  },
  {
    position: "3rd",
    points: 1,
  },
];

const ChallegeDialog = ({ challenge }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className="bg-black"
        onClick={handleClickOpen}
      >
        View details
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="bg-black text-white">
          <DialogTitle id="alert-dialog-title">
            <CountDown></CountDown>
          </DialogTitle>
          <DialogContent>
            <CardContent>
              <Typography variant="body1" paragraph>
                This competition is centered around{" "}
                <strong>Theme: [Competition Theme]</strong>.
              </Typography>
              <Typography variant="body1" paragraph>
                It will run for <strong>[Duration]</strong>, and there are
                special rules to make it even more exciting!
              </Typography>
              <div>
                <Typography variant="h6">Rules description below :</Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary={
                        <>
                          <strong>Form & Technique:</strong> Perform exercises
                          with proper form and technique for safety. Judges
                          assess posture, range of motion, and control.
                        </>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <>
                          <strong>Scoring System:</strong> Clear points system
                          for workout achievements. Judges consider reps, time,
                          and exercise difficulty.
                        </>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <>
                          <strong>Variety of Workouts:</strong> Diverse set of
                          workouts for strength, endurance, and flexibility.
                          Include weightlifting, cardio, and bodyweight
                          exercises.
                        </>
                      }
                    />
                  </ListItem>
                </List>
              </div>
              <Typography variant="body1" className="text-red-600" paragraph>
                Don't miss the chance to showcase your skills and creativity.
                Exciting rewards await the winners!
              </Typography>
              <div className="rewards-section">
                <Typography variant="h6" paragraph>
                  Rewards:
                </Typography>
                <div className="flex justify-center items-center flex-wrap gap-3 ">
                  {positions.map((position) => (
                    <div
                      key={position?.points}
                      className="flex gap-1 justify-center items-center flex-wrap"
                    >
                      <div className="bg-gray-300 px-4 py-2 rounded-xl text-center">
                        <div className="mb-4 text-center ">
                          <Typography
                            component="span"
                            className="uppercase px-4 py-1 bg-slate-500 text-white rounded-full text-xs font-bold "
                          >
                            {position.position} place
                          </Typography>
                        </div>

                        <Typography component="p" className=" text-black">
                          {" "}
                          {position.points} points
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              className="bg-red-600"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="bg-white text-black"
              onClick={handleClose}
              autoFocus
            >
              Take part
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default ChallegeDialog;
