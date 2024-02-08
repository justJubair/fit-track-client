export const getAllServices= async()=>{
    const res = await fetch('https://fit-track-server.vercel.app/api/v1/services')
    return res.json();
}