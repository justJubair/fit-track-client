const axios = require("axios");

const postAcceptedChallengeInfo = async (challengeId, user) => {
  try {
    const response = await axios.post(
      "https://fit-track-server.vercel.app/api/v1/acceptedChallenges",
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
