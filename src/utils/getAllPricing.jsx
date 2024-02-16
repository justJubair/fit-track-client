export const getAllPricing = async()=>{
       const res = fetch('http://localhost:3000/price');
       return res.json();
}