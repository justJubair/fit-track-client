"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { Controller, useForm } from "react-hook-form";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import Image from "next/image";
import LOGO from "../../../assets/images/logo04.png";

const UserInfoDialog = ({ serv }) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const username = "SampleUsername";
  const email = "sample@email.com";

  const onSubmit = (data) => {
    const formData = {
      username: username,
      email: email,
      ...data,
    };

    console.log("Form Data:", formData);
    handleClose();
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <Button
        sx={{
          my: 2,
          color: { xs: "#000000", md: "#fff" },
          display: "block",
          fontWeight: { xs: "regular", md: "bold" },
        }}
        onClick={handleClickOpen("paper")}
      >
        Customized Diet
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        PaperComponent={(props) => (
          <Paper
            {...props}
            style={{ backgroundColor: "transparent", boxShadow: "none" }}
          />
        )}
      >
        <CustomCard
          effectColor="#00000"
          color="#14AEFF"
          blur={10}
          borderRadius={0}
        >
          <DialogTitle id="scroll-dialog-title">
            <Image src={LOGO} width={150} height={150} alt="Logo" />
          </DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <Typography variant="h5">Exercise Suggestion Form</Typography>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ width: "100%", marginTop: 10 }}
            >
              <Typography variant="subtitle1">Username</Typography>
              <TextField
                label="Username"
                variant="outlined"
                margin="normal"
                fullWidth
                InputProps={{ readOnly: true }}
                value={username}
              />

              <Typography variant="subtitle1">Email</Typography>
              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                InputProps={{ readOnly: true }}
                value={email}
              />

              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ width: "100%", marginTop: 10 }}
              >
                <Typography variant="subtitle1">Username</Typography>
                <TextField
                  label="Username"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  InputProps={{ readOnly: true }}
                  value={username} // Replace with the actual username
                />

                <Typography variant="subtitle1">Email</Typography>
                <TextField
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  InputProps={{ readOnly: true }}
                  value={email} // Replace with the actual email
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
                    />
                  )}
                />

                <FormControl component="fieldset" margin="normal">
                  <Typography variant="subtitle1">
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
                          control={<Radio />}
                          label="Beginner"
                        />
                        <FormControlLabel
                          value="intermediate"
                          control={<Radio />}
                          label="Intermediate"
                        />
                        <FormControlLabel
                          value="advanced"
                          control={<Radio />}
                          label="Advanced"
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
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit(onSubmit)}
            >
              Get Suggestions
            </Button>
          </DialogActions>
        </CustomCard>
      </Dialog>
    </>
  );
};

export default UserInfoDialog;
