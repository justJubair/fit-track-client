export const getAllServices= async()=>{
    const res = await fetch('https://fit-track-client.vercel.app/services.json')
    return res.json();
}