const getAllBlogs = async () => {
  const allBlogs = await fetch("https://fit-track-server.vercel.app/api/v1/all-blogs");
  return allBlogs.json();
};

export default getAllBlogs;
