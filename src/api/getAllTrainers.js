export const getAllTrainers = async() =>{
    const res = await fetch('http://localhost:5000/api/v1/trainers');
    return res.json();
}