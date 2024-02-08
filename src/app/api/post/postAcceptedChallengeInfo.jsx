const axios = require("axios");

const postAcceptedChallengeInfo = async (challengeId, user) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/acceptedChallenges",
      {
        challengeId,
        user,
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error posting accepted challenge:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export default postAcceptedChallengeInfo;
