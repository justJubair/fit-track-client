export const getSingleBlog = async(id)=>{
    const res = await fetch(`https://fit-track-server.vercel.app/api/v1/blog/${id}`)
    return res.json()
}