"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Controller, useForm } from 'react-hook-form';
import { FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import Image from 'next/image';

// import logo
import LOGO from "../../assets/images/logo02.png"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TrainerForm =({open, setOpen})=> {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

const {
  control,
  handleSubmit,
  formState: { errors },
} = useForm();

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    const formData = {
      username: username,
      email: email,
      ...data,
    };

    // submitHealthInfo(formData);
    // handleClose();
  };



  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
          <DialogTitle
            sx={{ mx: "auto", display: "flex", justifyContent: "center" }}
            id="scroll-dialog-title"
          >
            <Image src={LOGO} width={150} sx={{ height: "auto" }} alt="Logo" />
          </DialogTitle>
        <DialogContent>
        <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ width: "100%", marginTop: 10 }}
            >
              <Controller
                name="age"
                control={control}
                defaultValue=""
                rules={{
                  required: "Age is required",
                  pattern: {
                    value: /^\d+$/,
                    message: "Please enter a valid age (Numbers only)",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Age"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.age}
                    helperText={errors.age?.message}
                    InputProps={{
                      style: { color: "#fff" },
                    }}
                    InputLabelProps={{
                      style: { color: "#fff" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fff",
                      },
                    }}
                  />
                )}
              />
              <Controller
                name="weight"
                control={control}
                defaultValue=""
                rules={{
                  required: "Weight is required",
                  pattern: {
                    value: /^\d+$/,
                    message: "Please enter a valid weight (Numbers only)",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Weight (kg)"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.weight}
                    helperText={errors.weight?.message}
                    InputProps={{
                      style: { color: "#fff" },
                    }}
                    InputLabelProps={{
                      style: { color: "#fff" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fff",
                      },
                    }}
                  />
                )}
              />

              <Controller
                name="height"
                control={control}
                defaultValue=""
                rules={{
                  required: "Height is required",
                  pattern: {
                    value: /^\d+$/,
                    message: "Please enter a valid height (Numbers only)",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Height (cm)"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.height}
                    helperText={errors.height?.message}
                    InputProps={{
                      style: { color: "#fff" },
                    }}
                    InputLabelProps={{
                      style: { color: "#fff" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fff",
                      },
                    }}
                  />
                )}
              />

              <FormControl component="fieldset" margin="normal">
                <Typography variant="subtitle1" style={{ color: "#fff" }}>
                  Current Fitness Level
                </Typography>
                <Controller
                  name="fitnessLevel"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Fitness level is required" }}
                  render={({ field }) => (
                    <RadioGroup {...field} row>
                      <FormControlLabel
                        value="beginner"
                        control={<Radio style={{ color: "#fff" }} />}
                        label="Beginner"
                        style={{ color: "#fff" }}
                      />
                      <FormControlLabel
                        value="intermediate"
                        control={<Radio style={{ color: "#fff" }} />}
                        label="Intermediate"
                        style={{ color: "#fff" }}
                      />
                      <FormControlLabel
                        value="advanced"
                        control={<Radio style={{ color: "#fff" }} />}
                        label="Advanced"
                        style={{ color: "#fff" }}
                      />
                    </RadioGroup>
                  )}
                />
                {errors.fitnessLevel && (
                  <Typography color="error">
                    {errors.fitnessLevel.message}
                  </Typography>
                )}
              </FormControl>
            </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default TrainerForm;