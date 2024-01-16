export const getAllServices= async()=>{
    const res = await fetch('http://localhost:3000/services.json')
    // console.log(res)
    return res.json();
}