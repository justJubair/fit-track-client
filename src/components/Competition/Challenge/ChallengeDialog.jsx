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
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "white",
          "&:hover": {
            color: "black",
            backgroundColor: "white",
          },
        }}
        onClick={handleClickOpen('paper')}
      >
        View details
      </Button>
      <Dialog
        open={open}
        scroll={scroll}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent dividers={scroll === 'paper'} sx={{ backgroundColor: "black", color: "white" , }}>
          
          <div sx={{ color: "gray.500" }}>
            <Typography variant="h5" className="text-center font-bold py-2">
              <strong>Time left to take part!</strong>.
            </Typography>
            <FlipCountdown
              hideYear
              endAt={"2024-12-12 01:26:58"}
              size="small"
              titlePosition="bottom"
            ></FlipCountdown>
          </div>
          <CardContent>
            <Typography variant="h6">
              This competition is centered around{" "}
              <strong>Theme: [Competition Theme]</strong>.
            </Typography>
            <Typography variant="body1">
              It will run for <strong>[Duration]</strong>, and there are special
              rules to make it even more exciting!
            </Typography>
            <div>
              <Typography variant="h6">Rules description below :</Typography>
              <List>
                {[
                  {
                    text:
                      "Form & Technique: Perform exercises with proper form and technique for safety. Judges assess posture, range of motion, and control.",
                  },
                  {
                    text:
                      "Scoring System: Clear points system for workout achievements. Judges consider reps, time, and exercise difficulty.",
                  },
                  {
                    text:
                      "Variety of Workouts: Diverse set of workouts for strength, endurance, and flexibility. Include weightlifting, cardio, and bodyweight exercises.",
                  },
                ].map((item, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={<>{item.text}</>} />
                  </ListItem>
                ))}
              </List>
            </div>
            <Typography variant="body1" color="error" paragraph>
              Don't miss the chance to showcase your skills and creativity.
              Exciting rewards await the winners!
            </Typography>
            <div>
              <Typography variant="h6" paragraph>
                Rewards:
              </Typography>
              <div className="flex justify-center items-center flex-wrap gap-3 ">
                {positions.map((position, index) => (
                  <div
                    key={index}
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
              sx={{
                backgroundColor: "red.600",
                "&:hover": {
                  backgroundColor: "darkgrey",
                },
              }}
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "darkgrey",
                },
              }}
              onClick={handleClose}
              autoFocus
            >
              Take part
            </Button>
          </DialogActions>

        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChallegeDialog;
