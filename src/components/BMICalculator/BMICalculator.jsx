"use client"
import React, { useState } from 'react';
import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import HealthMessage from '../HealthMessage/HealthMessage';
import BMIResultMessage from '../BMIResultMessage/BMIResultMessage';

const BMICalculator = () => {
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [result, setResult] = useState(null)



    const calculateBMI = e => {
        e.preventDefault()
        const weightInKg = parseFloat(weight)
        const heightInM = parseFloat(height) / 100

        if(!isNaN(weightInKg) && !isNaN(heightInM)) {
            const bmi = (weightInKg / (heightInM ** 2)).toFixed(2);
            setResult(parseFloat(bmi))
        }
        else {
            setResult("please enter a valid height and weight")
        }

    }
    return (
        <div className="max-w-[1336px] mx-auto">
        <Typography className='font-semibold text-black text-center mt-8 mb-6' variant='h4'>BMI Calculator</Typography>
      
        <div className='flex md:flex-row flex-col items-center justify-around'>
          <form onSubmit={calculateBMI} className='m-4 md:m-8 p-4 flex items-center flex-col md:flex-row'>
            <Stack spacing={2} className="mb-4 md:mb-0 md:mr-4">
              <TextField
                variant='filled'
                label="Weight (kg)"
                type='number'
                onChange={(e) => setWeight(e.target.value)}
              ></TextField>
      
              <TextField
                variant='filled'
                label="Height (cm)"
                type='number'
                onChange={(e) => setHeight(e.target.value)}
              ></TextField>
            </Stack>
            <Button type='submit' size='large' sx={{color: "#378ae5"}} className='w-full md:w-24 h-14 font-medium' variant='outlined'>Calculate</Button>
          </form>
      
          <div className="md:w-1/2">
            <Paper className="p-4">
              {result !== null && (
                <div>
                  <Typography variant="h6" gutterBottom>
                    BMI: {result}
                  </Typography>
                  <Typography variant="body1">
                    BMI Result: <span className='font-bold'><BMIResultMessage bmiResult={result} /></span>
                  </Typography>
                  <Typography variant="body1">
                    Health Message: <span className='font-medium'><HealthMessage bmiResult={result} /></span>
                  </Typography>
                </div>
              )}
              {result === null && (
                <Typography variant="body1" className='text-[#378ae5]'>
                  Enter Your Height and Weight to get BMI result
                </Typography>
              )}
            </Paper>
          </div>
        </div>
      </div>
      
      
      
    );
};

export default BMICalculator;