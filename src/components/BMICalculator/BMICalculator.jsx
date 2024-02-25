"use client";
import React, { useState } from "react";
import { Button, Dialog, DialogContent, DialogTitle, Paper, Stack, TextField, Typography } from "@mui/material";
import HealthMessage from "../HealthMessage/HealthMessage";
import BMIResultMessage from "../BMIResultMessage/BMIResultMessage";
import GaugeChart from "react-gauge-chart";
import { QuestionMarkRounded } from "@mui/icons-material";
import {PropTypes} from "prop-types"
import { Box } from "@mui/system";

const BMICalculator = () => {

  const [result, setResult] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const calculateBMI = (e) => {
    e.preventDefault();
    const form = e.target;
    const height = form.height.value;
    const weight = form.weight.value;
   
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;

    if (!isNaN(weightInKg) && !isNaN(heightInM)) {
      const bmi = (weightInKg / heightInM ** 2).toFixed(2);
      setResult(parseFloat(bmi));
    } else {
      setResult(null);
    }
  };

  const calculateGaugePercentage = () => {
    // 0 to 30% = underweight
    if (result < 18.5) {
      // ((result =18.5) / 18.5) = 1 * 0.30 = 0.30 means 30 %,result decrease = percentage decrease
      return (result / 18.5) * 0.3;
    }
    // 30% to 60% = Normal Weight
    else if (result >= 18.5 && result < 25) {
      // add 30%  percentage, ((result 20 - 18.5 ) / 6.5 = 0.2307 * 0.30 = 0.0692 + 0.30 = 0.3692 = 36.92%
      return 0.3 + ((result - 18.5) / (25 - 18.5)) * 0.3;
    }
    // 60% to 90% = Overweight
    // 90% to 100% = Obesity
    else {
      // add 60%  percentage, ((result 40 - 25 ) / 15 = 1 * 0.40 = 0.4 + 0.60 = 1.00 = 100%
      return 0.6 + ((result - 25) / (40 - 25)) * 0.4;
    }
  };

  return (
    <div className="max-w-[1336px] mx-auto">
       <div className="flex justify-between">
          <Typography className=" text-black ml-10  md:ml-20 mt-8 mb-6 text-xl md:text-3xl " >
            <span className="text-[#378ae5] font-semibold">BMI</span> Calculator
          </Typography>
          <Button className="mr-11" onClick={handleClickOpen}>
            Help <QuestionMarkRounded />
          </Button>
        </div>
        <Dialog open={open} onClose={handleClose} >
          <DialogTitle className="font-medium text-2xl text-white">Help</DialogTitle>
          <DialogContent>
            <Typography className="text-white">
              Welcome to the BMI Calculator! <br />Here&apos;s some information to
              help you use the calculator:
              {/* <br /><br /> */}
              <div className="text-white">
                <li>Enter your weight in kilograms.</li>
                <li>Enter your height in centimeters.</li>
                <li>
                  Click the &rdquo;Calculate&rdquo; button to get your BMI
                  result.
                </li>
              </div>
              <br />
              <span className="font-medium text-white">BMI Categories:</span>
              <ul>
                <li><span className="font-medium text-white">Underweight:</span> BMI less than 18.5</li>
                <li> <span className="font-medium text-white">Normal Weight:</span> BMI between 18.5 and 24.9</li>
                <li><span className="font-medium text-white">Overweight:</span> BMI between 25 and 29.9</li>
                <li><span className="font-medium text-white">Obesity:</span> BMI 30 or greater</li>
              </ul>
              Remember that BMI is a general indicator and may not account for
              individual variations. Consult with a healthcare professional for
              personalized advice.
            </Typography>
          </DialogContent>
        </Dialog>
        <hr />
      <div className="flex md:flex-row flex-col items-center justify-around">
        <div>
        <form
          onSubmit={calculateBMI}
          className="m-4 md:m-8 p-4 flex gap-10 items-center flex-col md:flex-row"
        >
          <Stack spacing={2} className="mb-4 md:mb-0 md:mr-4">
            <TextField
              variant="filled"
              label="Weight (kg)"
              type="number"
              name="weight"
             
            ></TextField>

            <TextField
              variant="filled"
              label="Height (cm)"
              type="number"
              name="height"
            
            ></TextField>
          </Stack>
          <Button
            type="submit"
            variant="contained"
            className=" w-28 h-28 bg-[#378ae5] text-white"
            sx={{ borderRadius: 28 }}
          >
            <div className="flex flex-col">
              Calculate
              <span className="font-bold text-xl">BMI</span>
            </div>
          </Button>
        </form>
        <Typography variant="body1" className="text-[#378AE5]">
              * Enter Your Height and Weight to get BMI result
            </Typography>

        </div>
        <div className="md:w-1/2">
          <Paper className="md:p-4 p-0">
            {result !== null && (
              <div>
                <Typography variant="h6" gutterBottom>
                  BMI: <span className="text-xl md:text-2xl font-bold">{result}</span>
                </Typography>

                {/* BMI meter */}
                <GaugeChart
                  className="text-black w-full bg-gradient-to-r from-[#378AE5] via-[#378AE5] to-white"
                  id="gauge-chart5"
                  nrOfLevels={420}
                  arcsLength={[0.3, 0.3, 0.4]}
                  colors={["#F5CD19", "#5BE12C", "#EA4228"]}
                  percent={calculateGaugePercentage()}
                  arcPadding={0.02}
                />

                <Box>
                  <span className="font-bold">
                    <BMIResultMessage bmiResult={result} />
                  </span>
                </Box>
                <Box variant="body1">
                  <span className="font-medium">
                    <HealthMessage bmiResult={result} />
                  </span>
                </Box>
              </div>
            )}
            {result === null && (
              <>
                <GaugeChart
                  className="text-black bg-gradient-to-r from-[#378AE5] via-[#378AE5] to-white w-full"
                  id="gauge-chart5"
                  nrOfLevels={420}
                  arcsLength={[0.3, 0.3, 0.4]}
                  colors={["#F5CD19", "#5BE12C", "#EA4228"]}
                  percent={calculateGaugePercentage()}
                  arcPadding={0.02}
                />

              </>
            )}
          </Paper>
        </div>
      </div>
    </div>
  );
};





export default BMICalculator;
