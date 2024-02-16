import React from 'react';

const BMIResultMessage = ({ bmiResult }) => {
    if (bmiResult < 18.5) {
      return <p>Underweight</p>;
    } else if (bmiResult >= 18.5 && bmiResult < 25) {
      return <p>Normal Weight</p>;
    } else if (bmiResult >= 25 && bmiResult < 30) {
      return <p>Overweight</p>;
    } else {
      return <p>Obesity</p>;
    }
  };
  
export default BMIResultMessage;