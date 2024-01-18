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

const ChallegeDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contain" className="bg-black" onClick={handleClickOpen}>
        View details
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Welcome to the Ongoing Competition!"}
        </DialogTitle>
        <DialogContent>
          <div>
            <CardContent>
              <Typography variant="body1" paragraph>
                This competition is centered around{" "}
                <strong>Theme: [Competition Theme]</strong>.
              </Typography>
              <Typography variant="body1" paragraph>
                It will run for <strong>[Duration]</strong>, and there are
                special rules to make it even more exciting!
              </Typography>
              <Typography variant="body1" paragraph>
                [Special Rules Description]
              </Typography>
              <Typography variant="body1" paragraph>
                Don't miss the chance to showcase your skills and creativity.
                Exciting rewards await the winners!
              </Typography>
              <div className="rewards-section">
                <Typography variant="h6" paragraph>
                  Rewards:
                </Typography>
                <div className="flex gap-1 justify-center items-center flex-wrap">
                  <div className="p-2 border border-black rounded-md">
                    <Typography className="text-sm font-bold ">
                      1st Place
                    </Typography>
                    <Typography className="text-xs">
                      [100 points will be added to user profile]
                    </Typography>
                  </div>
                  <div className="p-2 border border-black rounded-md">
                    <Typography className="text-sm font-bold ">
                      2nd Place
                    </Typography>
                    <Typography className="text-xs">
                      [60 points will be added to user profile]
                    </Typography>
                  </div>
                  <div className="p-2 border border-black rounded-md">
                    <Typography className="text-sm font-bold ">
                      3rd Place
                    </Typography>
                    <Typography className="text-xs">
                      [20 points will be added to user profile]
                    </Typography>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contain text-white hover:text-black"
            className="bg-red-600"
            onClick={handleClose}
          >
            close
          </Button>
          <Button
            variant="contain"
            className="bg-green-600 text-white hover:text-black"
            onClick={handleClose}
            autoFocus
          >
            Take part
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default ChallegeDialog;
