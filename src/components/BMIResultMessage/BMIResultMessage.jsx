import React from 'react';

const BMIResultMessage = ({ bmiResult }) => {
  if (bmiResult < 18.5) {
    return <p className='font-bold text-xl md:text-2xl text-yellow-400'>Underweight</p>;
  } else if (bmiResult >= 18.5 && bmiResult < 25) {
    return <p className='font-bold text-xl md:text-2xl text-green-500'>Normal Weight</p>;
  } else if (bmiResult >= 25 && bmiResult < 30) {
    return <p className='text-red-400 font-bold text-xl md:text-2xl'>Overweight</p>;
  } else {
    return <p className='text-red-600 font-bold text-xl md:text-2xl'>Obesity</p>;
  }
};
  
export default BMIResultMessage;