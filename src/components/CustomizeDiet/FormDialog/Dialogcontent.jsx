import { Button, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import { Controller } from 'react-hook-form';

const Dialogcontent = () => {
    return (
        <>
        <Box
        className="glass"
        //   sx={{
        //     backgroundColor: (theme) => `black`,
        //     blur: 100,
        //     borderRadius: 0,
        //   }}
        >
          <DialogTitle
            sx={{ mx: "auto", display: "flex", justifyContent: "center" }}
            id="scroll-dialog-title"
          >
            <Image src={LOGO} width={150} sx={{ height: "auto" }} alt="Logo" />
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
        </Box>
        </>
    );
};

export default Dialogcontent;