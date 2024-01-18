import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FlipCountdown from "@rumess/react-flip-countdown";
import {
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
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
        <div className="bg-black p-2">
          <div className="text-gray-500">
            <h5 className="text-center font-bold py-2 text-white">
              <strong>Time left to take part!</strong>.
            </h5>
            <FlipCountdown
              hideYear
              endAt={"2024-12-12 01:26:58"}
              size="small"
              titlePosition="bottom"
            ></FlipCountdown>
          </div>
          <CardContent>
            <Typography variant="h6" className="text-white">
              This competition is centered around{" "}
              <strong>Theme: [Competition Theme]</strong>.
            </Typography>
            <Typography variant="body1" className="text-white">
              It will run for <strong>[Duration]</strong>, and there are special
              rules to make it even more exciting!
            </Typography>
            <div>
              <Typography variant="h6" className="text-white">
                Rules description below :
              </Typography>
              <List className="text-white">
                <ListItem>
                  <ListItemText
                    primary={
                      <>
                        <strong>Form & Technique:</strong> Perform exercises
                        with proper form and technique for safety. Judges assess
                        posture, range of motion, and control.
                      </>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <>
                        <strong>Scoring System:</strong> Clear points system for
                        workout achievements. Judges consider reps, time, and
                        exercise difficulty.
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
                        Include weightlifting, cardio, and bodyweight exercises.
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
            <div className="rewards-section text-white">
              <Typography variant="h6" paragraph>
                Rewards:
              </Typography>
              <div className="flex justify-center items-center flex-wrap gap-3 ">
                {positions.map((position) => (
                  <div
                    key={position?.points}
                    className="flex gap-1 justify-center items-center flex-wrap transform hover:scale-105 transition-transform "
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
          <DialogActions>
            <Button
              variant="contained"
              className="bg-red-600"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              variant="contained"
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
