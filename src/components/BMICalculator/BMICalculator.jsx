"use client"
import React, { useState } from 'react';
import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import HealthMessage from '../HealthMessage/HealthMessage';
import BMIResultMessage from '../BMIResultMessage/BMIResultMessage';
import GaugeChart from 'react-gauge-chart';

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
          setResult(null)
        }

    }


     const calculateGaugePercentage = () => {
    // 0 to 30% = underweight
    if(result  < 18.5) {
      // ((result =18.5) / 18.5) = 1 * 0.30 = 0.30 means 30 %,result decrease = percentage decrease
      return (result / 18.5) * 0.30
    }
    // 30% to 60% = Normal Weight
    else if(result >=18.5 && result < 25) {
      // add 30%  percentage, ((result 20 - 18.5 ) / 6.5 = 0.2307 * 0.30 = 0.0692 + 0.30 = 0.3692 = 36.92% 
      return 0.30 + ((result - 18.5) / (25 - 18.5)) * 0.30
    }
    // 60% to 90% = Overweight
    // 90% to 100% = Obesity
    else {
      // add 60%  percentage, ((result 40 - 25 ) / 15 = 1 * 0.40 = 0.4 + 0.60 = 1.00 = 100%
      return 0.60 + ((result - 25) / (40 - 25)) * 0.40 
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

                  {/* BMI meter */}
                  <GaugeChart
                  className="text-black w-full bg-[#378ae5]"
                    id="gauge-chart5"
                    nrOfLevels={420}
                    arcsLength={[0.3, 0.3, 0.4]}
                    colors={["#F5CD19","#5BE12C", "#EA4228"]}
                    percent={calculateGaugePercentage()}
                    arcPadding={0.02}
                  />

                  <Typography variant="body1">
                    BMI Result: <span className='font-bold'><BMIResultMessage bmiResult={result} /></span>
                  </Typography>
                  <Typography variant="body1">
                    Health Message: <span className='font-medium'><HealthMessage bmiResult={result} /></span>
                  </Typography>
                </div>
              )}
              {result === null && (
                <>
                <GaugeChart
                className="text-black bg-[#378ae5] w-full"
                  id="gauge-chart5"
                  nrOfLevels={420}
                  arcsLength={[0.3, 0.3, 0.4]}
                  colors={["#F5CD19","#5BE12C", "#EA4228"]}
                  percent={calculateGaugePercentage()}
                  arcPadding={0.02}
                />
                <Typography variant="body1" className='text-[#378ae5]'>
                  Enter Your Height and Weight to get BMI result
                </Typography>
                </>
              )}
            </Paper>
          </div>
        </div>
      </div>
      
      
      
    );
};

export default BMICalculator;