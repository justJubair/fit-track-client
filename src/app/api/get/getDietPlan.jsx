import axios from 'axios';

// Function to make a GET request to the diet plan API
const getDietPlan = async (userEmail) => {
  try {
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint for your diet plan API
    const response = await axios.get(`https://fit-track-server.vercel.app/api/v1/dietplan/${userEmail}`);
    return response.data;
  } catch (error) {
    // Handle errors
    console.error('Error fetching diet plan:', error.message);
    throw error;
  }
};

export default getDietPlan;
