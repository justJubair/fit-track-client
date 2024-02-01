export const getEnrolledServices = async () => {
    const res = await fetch('http://localhost:5000/api/v1/services');
    return res.json();
}
