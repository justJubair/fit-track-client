"use client"
import React, { useState } from 'react';
import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import HealthMessage from '../HealthMessage/HealthMessage';
import BMIResultMessage from '../BMIResultMessage/BMIResultMessage';

const BMICalculator = () => {
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [result, setResult] = useState(null)

    const calBMI = (e) => {
        e.preventDefault()
        const weightInKG = parseFloat(weight)
        const heightInM = parseFloat(height) / 100

        if(!isNaN(weightInKG) && !isNaN(heightInM)) {
            const bmi = (weightInKG / (heightInM ** 2)).toFixed(2);
            setResult(parseFloat(bmi))
        } else {
            setResult("please enter a valid height and weight")
        }
    }


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
        <div className=" max-w-[1336px] mx-auto">
        <Typography className='font-semibold' color='black' variant='h4' textAlign="center" >BMI Calculator</Typography>
        <div className='flex items-center justify-around'>
        <form onSubmit={calculateBMI} className='m-20 border flex items-center'>
        <Stack  spacing={2}>
        
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
           <Button type='submit' className='mt-5 ml-5 w-24 h-14' variant='outlined'>Calculate</Button>
        </form>
       <div>
        
                <Paper>
                {result !== null && (
      <Paper >
        <Typography variant="h6" gutterBottom>
          BMI: {result}
        </Typography>
        <Typography variant="body1">
          BMI Result: <BMIResultMessage bmiResult={result} />
        </Typography>
        <Typography variant="body1">
          Health Message: <HealthMessage bmiResult={result} />
        </Typography>
      </Paper>
    )}
    {result === null && (
      <Typography variant="body1" className='text-blue-400'>
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