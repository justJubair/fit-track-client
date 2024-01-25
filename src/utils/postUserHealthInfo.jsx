import axios from 'axios';
const submitHealthInfo = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/v1/healthinfo', formData);
    console.log('HealthInfo submission successful:', response.data);
    return response.data;
  } catch (error) {
    // Handle errors
    console.error('Error submitting healthinfo:', error.message);
    throw error;
};

export default submitHealthInfo;
