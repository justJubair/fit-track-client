/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FlipCountdown from "@rumess/react-flip-countdown";
import {
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";

import { toast } from "react-toastify";
import postAcceptedChallengeInfo from "@/app/api/post/postAcceptedChallengeInfo";
import sendMail from "@/api/mailSender";
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
  const [scroll, setScroll] = React.useState("paper");
  const { data: session } = useSession();
  const challengeId = challenge?._id;
  const email = session?.user?.email;
  const name = session?.user?.name;
  const user = { email, name };
  const subject = "Confirmation of challenge in Fit Track";
  const message = `Congratulations! 
  You have successfully listed yourself to take part in ${challenge.challengeName}`;
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
  const handleTakePart = async () => {
    postAcceptedChallengeInfo(challengeId, user)
      .then(  async (result)=> {
        try {
         await sendMail(email, subject, message);
          handleClose();
        } catch (error) {
          toast.error("Error while sending mail:", error, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      })
      .catch((error) => {
        console.error("", error);
        toast.error("Failed to post accepted challenge:", error, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
    try {
      await sendMail(email, subject, message);
      handleClose();
    } catch (error) {
      toast.error("Error while sending mail:", error, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black !important",
          color: "white",
          "&:hover": {
            color: "black",
            backgroundColor: "white !important",
          },
        }}
        onClick={handleClickOpen("paper")}
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
        <DialogContent dividers={scroll === "paper"} sx={{ color: "white" }}>
          <div>
            <Typography variant="h5" className="text-center font-bold py-2">
              <strong>Time left to take part!</strong>.
            </Typography>
            <FlipCountdown
              hideYear
              endAt={`${challenge.lastDateForSubmissions}`}
              size="small"
              titlePosition="bottom"
            ></FlipCountdown>
          </div>
          <CardContent>
            <Typography variant="h6">
              This competition is centered around{" "}
              <strong>{challenge.challengeName}</strong>.
            </Typography>
            <div>
              <Typography variant="h6">Rules description below :</Typography>
              <List>
                {challenge.rules?.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemText>
                      {" "}
                      {index + 1}. {item}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </div>
            <Typography variant="h6" color="error">
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
                backgroundColor: "red !important",
                "&:hover": {
                  backgroundColor: "darkgrey !important",
                },
              }}
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black !important",
                "&:hover": {
                  backgroundColor: "darkgrey !important",
                },
              }}
              onClick={handleTakePart}
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
