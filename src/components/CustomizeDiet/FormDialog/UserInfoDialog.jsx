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
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { Controller, useForm } from "react-hook-form";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import Image from "next/image";
import LOGO from "../../../assets/images/logo02.png";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import submitHealthInfo from "@/app/api/post/postUserHealthInfo";


const UserInfoDialog = ({ serv }) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data: session } = useSession();

  const email = session?.user?.email;
  const username = session?.user?.name;
  console.log(email);
  console.log(username);

  const onSubmit = (data) => {
    const formData = {
      username: username,
      email: email,
      ...data,
    };

    console.log("Form Data:", formData);
    submitHealthInfo(formData);
    toast.success("Hello World!");
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
          <DialogTitle
            sx={{ mx: "auto", display: "flex", justifyContent: "center" }}
            id="scroll-dialog-title"
          >
            <Image src={LOGO} width={150} height={150} alt="Logo" />
          </DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <Typography
              sx={{
                color: "#fff",
                textAlign: "center",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
              variant="h5"
            >
              Custom Diet Form
            </Typography>

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
