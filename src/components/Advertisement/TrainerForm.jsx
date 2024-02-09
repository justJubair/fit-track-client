"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Controller, useForm } from 'react-hook-form';
import { FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import Image from 'next/image';

// import logo
import LOGO from "../../assets/images/logo02.png"
import { Box } from '@mui/system';
import { postTrainer } from '@/api/postTrainer';
import { toast } from 'react-toastify';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TrainerForm =({open, setOpen})=> {


const {
  control,
  reset,
  handleSubmit,
  formState: { errors },
} = useForm();

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async(data) => {
      const Trainer = {
        experience_years: data?.experience,
        name: data?.name,
        age: 25,
        gender: data?.gender,
        specialization: data?.specialization,
        email: data?.email,
        phone: data?.phone,
        location: data?.location,
        bio: data?.bio,
        profile_image: "https://acefitnessmediastorage.blob.core.windows.net/acepublicfiles/88bd0989-e540-4822-8fc5-cd5a443ba0d6.jpg"
      }
      const dbResponse = await postTrainer(Trainer)
      if(dbResponse?._id){
        toast.success("Registration successfull.", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        reset()
      }
   
  };



  return (
    <React.Fragment>
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
                name="name"
                control={control}
                defaultValue=""
                rules={{
                  required: "Name is required",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name?.message}
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

            <Box display="flex" gap="1rem">
                {/* specialization */}
                <Controller
                name="specialization"
                control={control}
                defaultValue=""
                rules={{
                  required: "Specialization is required",
                 
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="What's your specialization"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.specialization}
                    helperText={errors.specialization?.message}
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
              {/* Location */}
              <Controller
                name="location"
                control={control}
                defaultValue=""
                rules={{
                  required: "location is required",
                 
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Your Location"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.location}
                    helperText={errors.location?.message}
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
            </Box>



            <Box display="flex" gap="1rem">
                {/* phone */}
                <Controller
                name="phone"
                control={control}
                defaultValue=""
                rules={{
                  required: "Phone is required",
                  pattern: {
                    value: /^\d+$/,
                    message: "Please enter a valid experience (Numbers only)",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Phone number"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
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

                    {/* experience */}
              <Controller
                name="experience"
                control={control}
                defaultValue=""
                rules={{
                  required: "experience is required",
                  pattern: {
                    value: /^\d+$/,
                    message: "Please enter a valid experience (Numbers only)",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Years of experience"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.experience}
                    helperText={errors.experience?.message}
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
            </Box>

                    {/* email */}
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "email is required",
                 
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
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

              {/* bio */}
              <Controller
                name="bio"
                control={control}
                defaultValue=""
                rules={{
                  required: "bio is required",
                 
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Your Bio"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.bio}
                    helperText={errors.bio?.message}
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
                  Gender
                </Typography>
                <Controller
                  name="gender"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Gender is required" }}
                  render={({ field }) => (
                    <RadioGroup {...field} row>
                      <FormControlLabel
                        value="Male"
                        control={<Radio style={{ color: "#fff" }} />}
                        label="Male"
                        style={{ color: "#fff" }}
                      />
                      <FormControlLabel
                        value="Female"
                        control={<Radio style={{ color: "#fff" }} />}
                        label="Female"
                        style={{ color: "#fff" }}
                      />
                    </RadioGroup>
                  )}
                />
                 {errors.gender && (
                  <Typography color="error">
                    {errors.gender.message}
                  </Typography>
                )}
               
              </FormControl>
            </form>
              
        </DialogContent>
        <DialogActions>
            <Button sx={{color: "#42a5f5", paddingLeft: "1rem"}} onClick={handleClose}>Cancel</Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit(onSubmit)}
            >
              Be a Trainer
            </Button>
          </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default TrainerForm;