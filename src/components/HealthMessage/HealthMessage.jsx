import React from 'react';

const HealthMessage = ({ bmiResult }) => {
  if (bmiResult < 18.5) {
    return <p className='md:text-xl text-xs font-medium'>Time to eat and gain some weight!</p>;
  } else if (bmiResult >= 18.5 && bmiResult < 25) {
    return <p className='md:text-xl text-xs font-medium'>Great job! You&apos;re maintaining a healthy weight.</p>;
  } else if (bmiResult >= 25 && bmiResult < 30) {
    return <p className='md:text-xl text-xs font-medium'>Consider exercising regularly and maintaining a balanced diet.</p>;
  } else {
    return <p className='md:text-xl text-xs font-medium'>It&apos;s important to focus on healthy lifestyle choices. Consult a healthcare professional for guidance.</p>;
  }
};

export default HealthMessage;