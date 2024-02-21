export const getAllChallenges = async()=>{
    const res = await fetch("https://fit-track-server.vercel.app/api/v1/challenges")
    return res.json();
}