export const getAllServices= async()=>{
    const res = await fetch('https://fit-track-client.vercel.app/services.json')
    // console.log(res)
    return res.json();
}