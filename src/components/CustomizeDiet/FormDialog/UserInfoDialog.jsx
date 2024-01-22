"use client";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Service from "@/components/Services/Service";
import { useEffect, useRef, useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import LOGO from "../../../assets/images/logo04.png";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";

const UserInfoDialog = ({ serv }) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!data.exerciseTypes || data.exerciseTypes.length === 0) {
      // Add toast here for prefered exercise
      console.error("At least one preferred exercise type is required");
      return;
    }

    console.log(data);
    return handleClose();
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
      <Button onClick={handleClickOpen("paper")}>
        <Service onClick={handleClickOpen("paper")} serv={serv}></Service>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
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
              <Typography variant="subtitle1">Current Fitness Level</Typography>
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

            {/* ... (other form fields) ... */}

            <FormGroup margin="normal">
              <Typography variant="subtitle1">
                Preferred Exercise Types
              </Typography>
              <Controller
                name="exerciseTypes"
                control={control}
                defaultValue={[]}
                render={({ field }) => (
                  <>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Cardio"
                      {...field}
                      value="cardio"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Strength Training"
                      {...field}
                      value="strengthTraining"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Yoga"
                      {...field}
                      value="yoga"
                    />
                  </>
                )}
              />
              {errors.exerciseTypes && (
                <Typography color="error">
                  {errors.exerciseTypes.message}
                </Typography>
              )}
            </FormGroup>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: 20 }}
            onClick={handleSubmit(onSubmit)}
          >
            Get Suggestions
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserInfoDialog;
