import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CardContent, List, ListItem, ListItemText, Typography } from '@mui/material';


const ChallegeDialog =()=>{
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <>
        <Button variant="outlined" onClick={handleClickOpen}>
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
          <div >
        <CardContent>
        <Typography variant="body1" paragraph>
          This competition is centered around <strong>Theme: [Competition Theme]</strong>.
        </Typography>
        <Typography variant="body1" paragraph>
          It will run for <strong>[Duration]</strong>, and there are special rules to make it even more exciting!
        </Typography>
        <Typography variant="body1" paragraph>
          [Special Rules Description]
        </Typography>      
        <Typography variant="body1" paragraph>
          Don't miss the chance to showcase your skills and creativity. Exciting rewards await the winners!
        </Typography>
        <div className="rewards-section">
          <Typography variant="h6" paragraph>
            Rewards:
          </Typography>
          <div>
            <div>
            <Typography className='text-sm font-bold '>
            1st Place
          </Typography>
          <Typography className='text-xs'>
          [1st Place Reward]
          </Typography>
            </div>
          </div>
        </div>
      </CardContent>
      </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>close</Button>
            <Button onClick={handleClose} autoFocus>
              Take part
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
}
export default ChallegeDialog